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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Bot name is required." },
        notEmpty: { msg: "Bot name is required." },
      },
    },
    photo: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      allowNull: false,
      validate: {
        notNull: { msg: "Description is required." },
        notEmpty: { msg: "Description is required." },
      },
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};