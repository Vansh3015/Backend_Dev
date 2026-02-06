// const express = require('express');
// const app = express();

// const users = {
//   1: { name: 'Alice', age: 25 },
//   2: { name: 'Bob', age: 30 },
//   3: { name: 'Charlie', age: 35 },
//   4:
//     { name: 'David', age: 28 },
//     5: { name: 'Eve', age: 22 }
// };
// app.get("/user/:id",(req,res)=>{
//     const userId = req.params.id;
//     const user = users[userId];
//     if(user){
//         res.json(user);
//     }else{
//         res.status(404).json({ error: 'User not found' });
//     }
// });


// app.get('/', (req, res) => {
//     res.send('Hello, ExpressJS!');
// });
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });
// app.get('/contact', (req, res) => {
//     res.send('Contact Page');
// });
// app.get('/services', (req, res) => {
//     res.send('Services Page');
// });
// app.get('/products', (req, res) => {
//     res.send('Products Page');
// });
// app.get('/blog', (req, res) => {
//     res.send('Blog Page');
// });


// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

const express = require('express');
const app = express();
const users = {
  1: { name: 'Alice', age: 25 },
  2: { name: 'Bob', age: 30 },
  3: { name: 'Charlie', age: 35 },
  4: { name: 'David', age: 28 },
  5: { name: 'Eve', age: 22 }
};

app.get("/allUser",(req,res)=>{
    res.json(users);
})
app.get("/user/:id",(req,res)=>{
    const userId = req.params.id;
    const user = users[userId];
    if(user){
        res.json(user);
    }else{
        res.status(404).json({ error: 'User not found' });
    }
});
app.get('/', (req, res) => {
    res.send('Hello, ExpressJS!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    res.send('Services Page');
});

app.get('/products', (req, res) => {
    res.send('Products Page');
});

app.get('/blog', (req, res) => {
    res.send('Blog Page');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});