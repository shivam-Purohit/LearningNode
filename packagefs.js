const fs = require('fs');

// fs.readFile('file.txt','utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());//this is a blocking call

fs.writeFile('file2.txt',"this will be written in the file",()=>{  //file will be created if not already present
    //callback function
    console.log("data written in the file")
})
console.log("this example helps us to realise the asynchronous nature of nodejs")
