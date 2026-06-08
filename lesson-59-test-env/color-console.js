import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

import createDebug from 'debug';
import { logger } from './logger.js';

// DEBUG =================================
const debug = createDebug('app:main');
const debugDB = createDebug('app:db');

// Використовуємо іменовані екземпляри для логування
debug('Програма розпочала виконання');
debugDB('Виконано запит до бази даних');

// CHALK =================================
const errorMessage = chalk.red.bold


console.log(chalk.blue('Це повідомлення буде синього кольору'));
console.log(chalk.red.bold('Це повідомлення буде червоного кольору і жирним'));
console.log(chalk.green.bgWhite.underline('Це повідомлення буде зеленого кольору з білим фоном і підкресленням'));

console.log(errorMessage('О БОЖЕ, усе пропало!!!'))


// WINSTON =================================

logger.info('Це інформаційне повідомлення');
logger.error('Це повідомлення про помилку');

logger.error('error')
logger.warn('warning');
logger.info('info');