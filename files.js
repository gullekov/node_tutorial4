const fs = require('fs')

// fs.readFile('./doc/blog.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data.toString())
// })



fs.readFile('./doc/deneme.txt', (err, data)=>{
    if(err){
        console.log("gozleyan file tapylmady gynansakda")
    }else{
        console.log(`Maglumat geldi doly yagdayda ${data}`)
    }
})













// fs.readFile('./doc/synplar.txt', (err, data)=>{
//     if(err){
//         console.log("error berdi doly yazyn")
//     }else{
//         console.log(data.toString())
//     }

    
// })

// fs.writeFile('./doc/blog.txt', 'salam node bilen basagay bolyanlar', (err, data)=>{
//     console.log("write file system successly")
// })

// yokardaky file icerisindqki yazgylary uytgetmek ucin ulanylyar..

// fs.(!fs.existSync('./css')){

//     fs.mkdir('./css', (err)=>{
//         if(err){
//             console.log(err)
//         }
    
//         console.log('folder created successfull')
//     })

// }






















