'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING(200),
        allowNull:false
      },
      IsCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      CreatedDate: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Todos');
  }
};