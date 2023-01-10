import { config } from "../config/config.js"
import { Sequelize } from "sequelize"
import tutorial from "./tutorials.js"
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.tutorial = tutorial(sequelize, Sequelize)

export default db
