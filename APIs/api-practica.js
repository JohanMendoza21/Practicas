/* En el terminal hacemos npm init para indicar que este documento va a ser npm
    
    Instalamos express con npm install express*/

    // ESTE ES UN CODIGO DE ALGUIEN MAS QUE SE TIENE COMO REFERENCIA

const express = require('express'); 
const app = express();

app.use(express.json());

const students = [
    {id: 1, name: 'Jorge', age: 20, enroll: true},
    {id: 2, name: 'Mariana', age: 23, enroll: false},
    {id: 3, name: 'Antonio', age: 22, enroll: false},

];
//Vamos a declarar los request de nuestra api
app.get('/', (req, res) => {
    res.send('Node JS api');
});

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:id', (req, res)=>{
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Estudiante no encontrado');
    else res.send(student);
});

app.post('/api/students', (req, res)=> {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true')
    };
    students.push(student);
    res.send(student);
});

app.delete('/api/students/:id', (req, res)=>{
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Estudiante no encontrado');
    
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
});

const port = process.env.port || 80;
app.listen(port, ()=> console.log(`Escuchando en puerto ${port}...`));