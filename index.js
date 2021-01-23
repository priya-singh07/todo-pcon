const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const addtask = require('./events/add');
const updatetask = require('./events/update');
const deletetask = require('./events/delete');
const gettask = require('./events/get');
const PORT = process.env.PORT||3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', addtask);
app.put('/update/:id', updatetask);
app.delete('/delete/:id', deletetask);
app.get('/', gettask);

app.listen(PORT, async ()=>{
    console.log('server running at '+ PORT);
});