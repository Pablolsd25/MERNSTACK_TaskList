//Aquí se inicia el servidor 
const express = require('express'); //requerimos el modulo y lo guardamos en una constante del mismo nobre
const morgan = require('morgan');
const app = express(); //lo voy a ejecutar y lo voy a almacenar en un objeto  app se convierte en nuestro servidor



//Settings
app.set('port', process.env.PORT || 3000) //esto es para decirle que tome el puerto del sistema operativo, en servicios de la nuebe la herramienta te da el puerto
//Middlewares = son funciones que se ejecutana antes de que lleguen a nuestras rutas.
app.use(morgan('dev')   );
app.use(express.json()) // devuelve los datos de un archivo json 

//Routes

//Static files

//Starting the server
app.listen(app.get('port'),()=>{ //Con esto hacemos qe escuche el puerto 3000 y que se ejecute alguna tarea// estamos obteniednod el valor de puerto
 console.log( `Server on port ${app.get('port')}`) //En este caso la orden  en este caso que avise que el servidor esta en el puerto 3000
});