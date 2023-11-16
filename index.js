const httpServer = require("./src/app");
const { conn } = require("./src/db");
const PORT = process.env.DB_PORT;

conn
  .sync({ force: false })
  .then(() => {
    httpServer.listen(3001, () => {
      console.log(`server conectado a base de datos, puerto 3001`);
    });
  })
  .catch((error) => console.error(error));
