import express from 'express'
import path from 'path'
// const path = require('path');

class Server {
    private app: express.Application
    constructor(){
        this.app = express()
        this.config()

    }
    private async config(){
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(express.json()) // para que nuestro servidor entienda
        // los formatos json desde clientes
        this.app.use(express.static(__dirname+'/dist/angularSampleProject01'))
        this.app.get('/', function(req,res){
            res.sendFile(path.join(__dirname+'/dist/angularSampleProject01/index.html'));
        });

    }

    start(){
        this.app.listen(this.app.get('port'), 
        () => {
            console.log(`Server on port: ${this.app.get('port')}`)
        })
    }
}

const server = new Server()
server.start()