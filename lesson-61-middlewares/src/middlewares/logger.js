export const logger = (req, res, next) => {
  console.log('Logged: ', req.url, new Date().toISOString());
  next();
};