import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app.js';

dotenv.config({ path: 'config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

(async () => {
  try {
    await mongoose.connect(DB);
    console.log('DB connected successfully!');
  } catch (err) {
    console.log(err);
  }
})();

const port = 3000 || process.env.PORT;
app.listen(3000, '127.0.0.1', () =>
  console.log('Listening to the port:', port)
);
