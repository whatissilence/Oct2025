import express from 'express';
import session from 'express-session';
const app = express();

// Підключаємо express-session як middleware
app.use(session({
  secret: 'your-secret-key', // Використовуємо секретний ключ для підпису cookie сесії
  resave: false, // Не зберігаємо сесію, якщо вона не змінилася
  saveUninitialized: true, // Зберігаємо нову, але не ініціалізовану сесію
  cookie: { secure: false } // Цей параметр в `true` рекомендується для HTTPS. Для HTTP встановіть 'secure' на 'false'.
}));

// Маршрут для відстеження кількості відвідувань
app.get('/', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(`Ви відвідали цю сторінку ${req.session.page_views} разів`);
  } else {
    req.session.page_views = 1;
    res.send('Ласкаво просимо на цю сторінку вперше!');
  }
});

app.listen(3000, () => {
  console.log('Сервер працює на порту 3000');
});