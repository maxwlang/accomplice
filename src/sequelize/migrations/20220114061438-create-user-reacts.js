'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Reacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        allowNull: false,
        unique: true,
        type: Sequelize.UUID
      },
      messageSnowflake: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userUuid: {
        allowNull: false,
        type: Sequelize.UUID
      },
      reactorUuid: {
        allowNull: false,
        type: Sequelize.UUID
      },
      emoteUuid: {
        allowNull: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_Reacts');
  }
};