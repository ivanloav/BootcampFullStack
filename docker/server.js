const express = require('express');
// Constants
const hostname = '0.0.0.0';
const port = 8080;

// App
const app = express();

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

// GET method route
app.get('/secret', function (req, res, next) {
    res.send('Never be cruel, never be cowardly. And never eat pears!');
    console.log('This is a console.log message.');
});

/*
Your implementation here 
*/

// // Connect to mongodb server
const MongoClient = require('mongodb').MongoClient;
// /* Your url connection to mongodb container */
// const url = 'mongodb://localhost:27017/TestBootcamp';
const url = 'mongodb://mongodb:27017/TestBootcamp';
const dbName = 'TestBootcamp';
const client = new MongoClient(url);

app.use(express.json());

client.connect()
    .then(() => {
        console.log('Conectado a MongoDB');
        const db = client.db(dbName);

        app.get('/api/get/all', async (req, res) => {
            const collection = db.collection('miColeccion');
            const documentos = await collection.find({}).toArray();
            res.status(200).json(documentos);
        });

        app.get('/api/get/query', async (req, res) => {
            const query = req.query;
            const collection = db.collection('miColeccion');
            const documents = await collection.find(query).toArray();
            res.status(200).json(documents);
        });

        app.put('/api/put', async (req, res) => {
            const filter = { nombre: req.body.nombreAntiguo };
            const update = {
                $set: {
                    nombre: req.body.nombreNuevo,
                    valor: req.body.valorNuevo
                }
            };
            const collection = db.collection('miColeccion');
            const result = await collection.updateOne(filter, update, { upsert: true });
            if (result.matchedCount === 0) {
                res.status(201).send('Documento creado con los nuevos valores.');
            } else {
                res.status(200).send('Documento actualizado con éxito.');
            }
        });

        app.delete('/api/delete/:nombre', async (req, res) => {
            const nombreParaEliminar = req.params.nombre;
            const collection = db.collection('miColeccion');
            const result = await collection.deleteOne({ nombre: nombreParaEliminar });
            if (result.deletedCount === 0) {
                res.status(204).end();
            } else {
                res.status(200).send('Documento eliminado');
            }
    });

    app.listen(port, hostname, () => {
        console.log(`Running on http://${hostname}:${port}`);
    });
});
