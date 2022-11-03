'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    static associate(models) {
      transaction.belongsTo(models.user, { foreignKey: 'userId' }),
      transaction.belongsTo(models.category, { foreignKey: 'categoryId' })
    }
  };
  transaction.init({
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaction',
    timestamps: true,
    paranoid: true,
  });
  return transaction;
};