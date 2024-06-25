module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      fullName: {
        type: Sequelize.STRING,
      },
      salary: {
        type: Sequelize.STRING,
      }
    });
  
    return Employee;
  };