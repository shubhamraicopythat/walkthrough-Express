const fs = require('fs')

fs.readFile('Input.txt', function(err,data){
    if (err)
    {
        console.log('Error:' ,err);
        return err;
    
    }

    console.log('Data:',data);
    console.log('read end')
return data;
});
    console.log('other Stuff');6397403738