const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();



app.use(bodyParser.json());

app.listen("8000", () =>{
    console.log("Server is listening on port 8000")
});

app.post("/api/user", userController.create);

const users = [
    {
        name:'shivam',
        id:1
    },
    {
        name:'shiv',
        id:2
    },
    {
        name:'shiva',
        id:3
    }
   
]

//GET Request
app.get("/",(req,res) => {
    res.send("Learing node JS")

});

//CRUD 
// Create a user ----- POST
// Get a user -------- GET
// Update a user ----- PUT
// Delete a user ----- DELETE

// GET request to fetch

app.get("/api/users",(req,res)=>{
    res.send(users)
})

//GET request to return a user 
app.get("/api/users/:id",(req,res)=>{
    const id = req.params.id;

    const user = users.find((user)=>user.id == id)

    if(!user){
        res.status(404).json({message:"User does'nt exist"});
    }

    res.json(user);
});






//Create a new user
//POST

app.post("/api/user",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age

    const user = {
        id: Math.random() *10000,
        name: name,
        age:age,
    };

    users.push(user);
    res.json(users);

});






// Update a user
// PUT Request
 
app.put("/api/user/:id",(req,res)=>{
    const id = req.params.id;
   

    const user = users.find((user) => user.id == id);

    if(!user){
        res.status(404).json({message:"User does'nt exist"});
    }

    const keys = Object.keys(req.body);
    
    keys.forEach((key)=>{
        if(!user[key]){
            res.status(400).json({message:"Invalid key"});
        }

        keys.forEach(key => {
            user[key] = req.body[key];
        })
    });
    
    res.json(users);

});




// Deleta a user

app.delete("/api/user/:id",(req,res)=>{
    const id = req.params.id;

    const user = users.find((user) => user.id == id);

    if(!user){
        res.status(404).json({message:"User does'nt exist"});
    }

    const filteredUsers = users.filter((user) => user.id !=id);

    res.json(filteredUsers);
})




//mvc architecture
// mongo DB



