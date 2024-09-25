import pgPromise from "pg-promise";
import { env } from "./utils/env.js"


const { DB_USER, DB_NAME, DB_PASSWORD, DB_PORT_NUMBER, DB_URL } = env;

const db = pgPromise()(
    `postgress://${DB_USER}:${ DB_PASSWORD}@${ DB_URL}:${ DB_PORT_NUMBER}/${ DB_NAME}`
)

async function setupDB (){
    try{
        await db.none(`
            DROP TABLE IF EXISTS users;
            CREATE TABLE users(
            id SERIAL NOT NULL PRIMARY KEY,
            username  VARCHAR(255)
            );

            INSERT INTO users (username)
            VALUES ('Manuel');
            
            `)
    }catch (error){
        throw new Error("Issues with the database setup")
    }
}