import "dotenv/config"
import type { Options } from "sequelize";

export const DB_NAME : string = "HealthTrace";
export const DB_USER : string = "root";
export const DB_PASSWORD  = process.env.PASSWORD;
export const OBJ_CONN : Options= {
    host: process.env.DB_HOST,
    port: Number(process.env.PORT) || 5432,
    dialect : "postgres"
};

