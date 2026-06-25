import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = 3000;

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is missing in .env file');
}

const users = [];

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ===== Middleware =====

function isAuthenticated(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send('Authentication token missing');
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    const user = users.find(u => u.username === payload.username);
    if (!user) {
      res.clearCookie('token');
      return res.status(401).send('User not found');
    }
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.status(401).send('Invalid or expired token');
  }
}

// ===== HTML Views =====

const renderPage = (title, content) => `
<!DOCTYPE html>
<html><head><title>${title}</title></head><body>
<h1>${title}</h1>
${content}
</body></html>`;


// ===== Pages =====

app.get('/', (req, res) => {
  res.send(renderPage('Home', `
    <p><a href="/register">Register</a></p>
    <p><a href="/login">Login</a></p>
    <p><a href="/protected">Protected Page</a></p>
  `));
});

app.get('/register', (req, res) => {
  res.send(renderPage('Register', `
    <form method="post" action="/register">
      <input name="username" required placeholder="Username" />
      <input name="password" type="password" required placeholder="Password" />
      <button>Register</button>
    </form>
  `));
});

app.get('/login', (req, res) => {
  res.send(renderPage('Login', `
    <form method="post" action="/login">
      <input name="username" required placeholder="Username" />
      <input name="password" type="password" required placeholder="Password" />
      <button>Login</button>
    </form>
  `));
});

app.get('/protected', isAuthenticated, (req, res) => {
  res.send(renderPage('Protected Page', `
    <p>Welcome, ${req.user.username}!</p>
    <p>
      <pre>
        ${JSON.stringify(users, null, 4)}
      </pre>
    </p>
    <p><a href="/logout">Logout</a></p>
  `));
});

app.get('/profile', isAuthenticated, (req, res) => {
  res.send(renderPage('Profile', `<p>Welcome, ${req.user.username}!</p>`))
})

// ===== Endpoints =====
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  if (users.find(u => u.username === username)) {
    return res.status(400).send('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  users.push({ username, hash });
  res.send('User registered successfully');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  const valid = await bcrypt.compare(password, user.hash);
  if (!valid) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign(
    { username: user.username },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.cookie('token', token, { httpOnly: true });
  res.json({
    message: 'Login successful',
    // token: token // Only for demo purposes !!!!!
  });
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.send('Logged out');
});

// ===== Start Server =====

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});