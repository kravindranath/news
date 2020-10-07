const express = require('express');
const app = new express();
const PORT = 1985;

app.use(express.static('public'));

app.use('*', function(req, res){
    res.send('Hello World');
});

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
});
