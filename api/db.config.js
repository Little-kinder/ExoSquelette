module.exports = {
    HOST: "localhost:800",
    USER: "exosquelette",
    PASSWORD: "exosquelette",
    DB: "exosquelette",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };