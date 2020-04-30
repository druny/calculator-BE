// Ensure required ENV vars are set
const requiredEnv = ['PORT', 'DB_NAME', 'DB_URI'];
const unsetEnv = requiredEnv.filter((env: string) => typeof process.env[env] === 'undefined');

if (unsetEnv.length > 0) {
  throw new Error(`Required ENV variables are not set: ['${unsetEnv.join(', ')}']`);
}

const { PORT, DB_NAME, DB_URI } = process.env as Record<string, string>;

export default {
  PORT,
  DB_NAME,
  DB_URI,
};
