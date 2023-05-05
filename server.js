const app = require("./app");
const config = require("./app/config");
const MongoBD = require("./app/utils/mongodb.util");
async function startServer(){
    try{
        await MongoBD.connect(config.db.uri);
        console.log("Connected to the database!");
        const PORT = config.app.port;
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    } catch(error){
        console.log("Can not connect to the database!",error);
        process.exit();
    }
}
startServer();