const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// const users =   {
//     1:{name:"Pratyush",age:"29"},
//     2:{name:"Vansh",age:"26"}
// };



app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id;
    //console.log(id);
    //console.log(typeof(id));

    if(!id || !users[id]) return res.status(404).json({"message":"User not found"});
    return res.json(users[id]);
})

app.put("/changeAge",(req,res)=>{
    const { id,age } = req.body;
    //console.log(id);
    //console.log(typeof(id));
    if (!id || !users[id]) return res.status(404).json({"message":"User not available"});

    const user = users[id];
    console.log(user);
    user.age = age;
    return res.status(201).json({"message":"Changed the age!!"});
})

app.post("/students/register",(req,res)=> {
    const {name, branch} = req.body;
    if(!name || !branch) return res.status(400).json({"message":"name and branch are required"});

    fs.readfile('./students.json','utf-8',(err,data)=>{
        if(err) return res.status(500).json({"message":"Internal Server Error"});

        const students = JSON.parse(data|| '[]');

        const newStudent = {
            id: students.length >0 ? students[students.length -1].id +1 : 1,
            name,
            branch
        }
        students.push(newStudent);

        fs.writeFile('./students.json',JSON.stringify(students, null, 2),(err)=>{
            if(err) return res.status(500).json({"message":"Internal Server Error"});   
            return res.status(201).json({"message":"Student registered successfully",student:newStudent});
        });
    });

});



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
});