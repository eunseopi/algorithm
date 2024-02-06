const fs = require('fs');

try
{   
    const input = fs.readFileSync("/dev/stdin").toString().trim();
    console.log(input);
   }catch(err){
    console.log(err.message);
}


