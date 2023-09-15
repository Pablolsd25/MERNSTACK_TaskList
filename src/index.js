//Aquí se inicia el servidor 
const express = require('express'); //requerimos el modulo y lo guardamos en una constante del mismo nobre
const app = express(); //lo voy a ejecutar y lo voy a almacenar en un objeto  app se convierte en nuestro servidor

//Settings

//Middlewares

//Routes

//Static files

//Starting the server
app.listen(3000,()=>{ //Con esto hacemos qe escuche el puerto 3000 y que se ejecute alguna tarea
 console.log("Server on port 3000") //En este caso la orden  en este caso que avise que el servidor esta en el puerto 3000
})