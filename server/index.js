process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';

const config = require('config');
const server = require('./server');
const port = config.get('port');
server.listen(port, (error) =>{
    if (error){
        console.log(error);
    }
    else{
        console.log(`Aplicacao iniciada na porta $(port)`);
    }
});
