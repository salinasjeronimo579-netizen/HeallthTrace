import { Sequelize } from 'sequelize';
import { DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN } from './credentials.js';

export const CONN = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN);