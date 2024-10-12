import express from "express";
import { TemplateRouter } from "./routes/template/template.route";
import { ValidarIdMiddleware } from "./shared/middlewares";

const app = express();

app.use(express.json());
app.use(ValidarIdMiddleware);
app.use('/template', TemplateRouter)

export default app;

import {createPool} from 'mariadb'

const pool = createPool({
    host: 'Localhost', 
    user:'root', 
    password: 'senhateste123@',
    database: 'banco_teste_template',
    connectionLimit: 5
});

pool.getConnection()
   .then(conn => {
     conn.query("SELECT * FROM template")
       .then((rows) => {
         console.log(rows); //[ {val: 1}, meta: ... ]
         //Table must have been created before 
         // " CREATE TABLE myTable (id int, val varchar(255)) "
         return conn.query("INSERT INTO template (nome, atributo) values ('Hugo Medeiros', 'Atributo1')");
       })
       .then((res) => {
         console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
         conn.end();
       })
       .catch(err => {
         //handle error
         console.log(err); 
         conn.end();
       })
       
   }).catch(err => {
     //not connected
   });