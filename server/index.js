process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
const Server = require('./server');

class App{
    constructor(){
        this.config = require('config');
        this.server = new Server();
        
    }
    
    start(){
        const port = this.config.get('port');
        this.server.listen(port);
    }
}


const app = new App();
app.start();
