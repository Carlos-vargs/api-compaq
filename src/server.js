const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const host = process.env.HOST || 'localhost';
  console.log(`Server running at http://${host}:${PORT}/`);
});
