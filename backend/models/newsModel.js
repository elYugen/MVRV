import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Article = sequelize.define('Article', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  return Article;
};