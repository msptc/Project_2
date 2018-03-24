module.exports = function(sequelize, DataTypes) {

  var post = sequelize.define("Post", {
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      category: {
          type: DataTypes.STRING,
          defaultValue: "Personal"
      },
      body: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
  });
  return post;
};
