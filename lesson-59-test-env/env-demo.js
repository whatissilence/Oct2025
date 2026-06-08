import dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, GOOGLE_ID } = process.env;

// DEBUG =============================
// unix                DEBUG=app:* node color-console.js
// win                 set DEBUG=app:* && node color-console.js
// win powershell      $env:DEBUG = "app:*"; node color-console.js


console.log('========');
console.log('process.env');
console.log(process.env);
