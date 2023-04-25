'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // define association here
    }
  }
  Profile.init({
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};