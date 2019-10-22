const routes = (server) => {

    server.get('/api/profile', (req, res, next) => {
        try{
            res.send('Teste Perfil');
        }
        catch(error){

        }        
        return next();
    });
}

module.exports = routes;