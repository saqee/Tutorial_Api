import { Sequelize, DataTypes, Model } from "sequelize"
import sequelize from "./config.js"

const User = sequelize.define(
  "user",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
)

const Task = sequelize.define(
  "task",
  { name: DataTypes.STRING },
  { timestamps: false }
)
User.hasMany(Task)
Task.belongsTo(User)

export { User, Task }
