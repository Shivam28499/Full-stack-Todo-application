'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init({
    Title: {
      type:DataTypes.STRING(200),
      allowNull:false,
      validate:{
        len:[1,200]
      }
    },
    IsCompleted: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull:false
    },
    CreatedDate: {
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue: DataTypes.NOW,
    }
  }, {
    sequelize,
    modelName: 'Todo',
    timestamps: false,
  });
  return Todo;
};