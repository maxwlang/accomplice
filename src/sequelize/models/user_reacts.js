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
    uuid: DataTypes.UUIDV4,
    useruuid: DataTypes.UUIDV4,
    reactoruuid: DataTypes.UUIDV4,
    reactuuid: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'User_Reacts',
  });
  return User_Reacts;
};