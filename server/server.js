const ProfileRoutes = require('./src/profile/profile.route');

module.exports = class Server{    
    constructor(){

        const restify = require("restify");
        this.server = restify.createServer();
        new ProfileRoutes(this.server);
    }

    listen(port){
        this.server.listen(port, (error) =>{
            if (error){
                console.log(error);
            }
            else{
                console.log(`Aplicacao iniciada na porta $(port)`);
            }
        });        
    }
}