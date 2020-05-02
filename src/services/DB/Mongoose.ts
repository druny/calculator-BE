import mongoose from 'mongoose';

import { ENV } from '@/constants';

const { DB_NAME, DB_URI } = ENV;

const DB_URL = `${DB_URI}${DB_NAME}`;

export default () => {
  const connect = () => {
    mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return console.info(`Successfully connected to ${DB_URL}`);
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);

        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on('disconnected', connect);
};
