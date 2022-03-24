const app= require('./index');

const connect= require('./configs/db');

app.listen(4600, async()=>{
    try {
        await connect()
        console.log('listening on port 4600');

    }catch(err){

        console.log(err.message);
   }

});