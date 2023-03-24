const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({name: 'Leonardo', age: 33});
});

app.post('/userdata', (request, response) => {
    console.log(request.body);
    response.status(200).json({sucess: true})
})

app.listen(4000);