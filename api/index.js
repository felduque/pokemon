import app from "./src/app.js";

function start (){
    try{
        app.listen(3000, () => {
            console.log("Iniciando..")
        })
    }catch(err)
    {
        console.error(err)
    }
}


start()