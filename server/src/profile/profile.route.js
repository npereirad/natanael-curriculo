const ProfileController = require('./profile.controller');

module.exports = class ProfileRoutes{    

    constructor(server){
        this.server = server;
        this.controller = new ProfileController()
        this.initilize();        
    }

    initilize(){
        this.server.get('/api/profile', (req, res, next) => {
            try{                           
                res.send(this.controller.get());
            }
            catch(error){
                res.send(error);
            }        
            return next();
        });
    }

}