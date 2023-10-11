const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Pokemon', {
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    name : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },        
  },
  {freezeTableName : true, timestamps : false}
  );
};
