import mysql from 'mysql2'

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"team_info"
}).promise()

export async function getInfo(){
const [result] = await pool.query("SELECT * FROM users")
return result
}
const info= await getInfo()
console.log(info)

