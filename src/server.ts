import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({name: 'Leonardo', age: 33});
});

app.get('/users/new', (request, response) => {
    response.json([{name: 'Leonardo', age: 33}, {name: 'Lina', age: 29}]);
});

app.get('/users', (request, response) => {
    response.json([{name: 'Leonardo', age: 33}, {name: 'Lina', age: 29}]);
});

app.post('/userdata/:id/:email', (request, response) => {
    console.log(request.body);
    console.log(request.params);
    console.log(request.headers);
    response.status(200).json({sucess: true})
})

app.listen(4000);