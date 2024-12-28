const mongoose = require("mongoose")
module.exports =()=>{
    const connect=()=>{
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set("debug",true);
        }
        mongoose.connect('mongodb://127.0.0.1:27017/admin',{dbName: 'nodejs'})
        .then(()=>{ console.log('디비연결성공');})
        .catch((error)=>{console.log('몽고디비에러:',error);});
          
        };

    connect();
    mongoose.connection.on('error',(error)=>{
        console.error('몽고디비에러',error);
    });
    mongoose.connection.on('disconnected',()=>{
        console.error('몽고디비연결이 끊김..재시도함');
        connect()
    });

    require('./user');
    require('./comment');

};