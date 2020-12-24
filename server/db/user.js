const { Model, DataTypes } = require('sequelize');
const { Post }  = require("./post");


class User extends Model {}

/**
 * 
 * @param {Sequelize} sequelize - instance of sequelize
 */
function init(sequelize) {
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName :{
      allowNull: false,
      type: DataTypes.STRING,
    },
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.DATE
  },{ 
    sequelize, 
    modelName: "user",
    schema: "first_application",
    freezeTableName: true,
    timestamps: false
  });

  // User.hasOne(Post);
  // Post.belongsTo(User);

  return User;
}

module.exports = {
  init,
  User
};

