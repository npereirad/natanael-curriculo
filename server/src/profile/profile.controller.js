const ProfileRepository = require("./profile.repository");
module.exports = class ProfileController{
    constructor(){
        this._repository = new ProfileRepository();
    }

    get(){        
        console.log(this._repository);
        return this._repository.get();        
    }
}