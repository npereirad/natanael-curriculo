const fs = require("fs");
module.exports = class ProfileRepository {
    constructor() {
        this._filename = __dirname + "../../data/profile.json";
    }

    get() {        
        if (fs.existsSync(this._filename)) {
            let rawData = fs.readFileSync(this._filename);
            console.log(rawData);
            return JSON.parse(rawData);
        }
        else{
            console.log ()
        }
    }
}