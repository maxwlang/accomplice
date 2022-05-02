'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Reacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Reacts.init({
    uuid: DataTypes.UUID,
    messageSnowflake: DataTypes.STRING,
    userUuid: DataTypes.UUID,
    reactorUuid: DataTypes.UUID,
    emoteUuid: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User_Reacts',
  });
  return User_Reacts;
};