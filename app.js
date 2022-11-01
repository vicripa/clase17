const express = require ('express');
const app = express();
const path = require ('path');

let PORT = process.env.PORT || 3000
app.listen(PORT, () =>
    console.log('Servidor corriendo en puerto ' + PORT)
);

app.use(express.static('public'));   //con esta linea, pongo a disposición de todo el proyecto todo lo que esté dentro de la carpeta public

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

//tengo que crear las rutas para el register y login
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))    //agregar el form
});

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html')) //agregar el form
});

