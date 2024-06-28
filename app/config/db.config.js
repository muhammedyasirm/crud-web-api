
// Config for mssql 

module.exports = {
  // Host Name here
  HOST: "",
  PORT: "1433",
  // User name here
  USER: "",
  // Password Here
  PASSWORD: "",
  DB: "FMC_DB",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }
};

// Config for mysql(I am using mysql)

// module.exports = {
//   HOST: "",
//   USER: "",
//   PASSWORD: "",
//   DB: "",
//   dialect: "",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };