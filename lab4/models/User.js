const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const jwt = require('jsonwebtoken');

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {timestamps:false});



function createJwt (payload){
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'})  
}

module.exports = { User, createJwt };
