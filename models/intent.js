'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Intent extends Model {
    static associate(models) {
      Intent.belongsTo(models.Profile, { foreignKey: 'ProfileId' })
    }
  }
  Intent.init({
    intent: {
      type: DataTypes.STRING,
    },
    response: {
      type: DataTypes.TEXT,
    },
    utterances: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    ProfileId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Profiles',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'Intent',
  });
  return Intent;
};