import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Hero = sequelize.define('Hero', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sprite: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tier: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'heros',
    timestamps: true
  });

  const Passive = sequelize.define('Passive', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'passives',
    timestamps: false
  });

  const Spell = sequelize.define('Spell', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'spells',
    timestamps: false
  });

  Hero.hasMany(Passive, { foreignKey: 'hero_id' });
  Passive.belongsTo(Hero, { foreignKey: 'hero_id' });

  Hero.hasMany(Spell, { foreignKey: 'hero_id' });
  Spell.belongsTo(Hero, { foreignKey: 'hero_id' });

  return { Hero, Passive, Spell };
};