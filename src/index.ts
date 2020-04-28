import app from '@/app';

const { PORT } = process.env;

export default app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
