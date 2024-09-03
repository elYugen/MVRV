import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Streamer = sequelize.define('Streamer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  return Streamer;
};