import MongoClient from 'mongodb';

export async function connect(){
    try {
        const cliente = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true})
        const db = cliente.db('node-restapi');
        console.log('Conectado a la BD')
        return db
    } catch(e) {
        console.log(e)
    }
}

