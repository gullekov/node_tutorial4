const fs = require('fs');


if(fs.existsSync('./doc/synplar.txt')){
    fs.unlink('./doc/synplar.txt',(err)=>{
        if(err){
            console.log("file error" +  err)
        }else{
            console.log("file ustunlikli delete edildi")
        }
    })
}

