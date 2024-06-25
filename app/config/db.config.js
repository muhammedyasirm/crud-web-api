module.exports = {
    HOST: "10.10.50.121",
    PORT: "1433",
    USER: "sa-cmc-dev",
    PASSWORD: "4I59fTs3@Lb&",
    DB: "TestFMC",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };