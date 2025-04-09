import app from './server.ts'
const port = 3000;

app.listen(port, () => {
  return console.log(`⭐ Express is listening at http://localhost:${port}`);
});
