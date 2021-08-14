import { v4 as uuid } from 'uuid';

let users = [{
    id: 1, username: "Jin", age: 25
},
{
    id: 2, username: "Jin Woo Park",  age: 25
},
{
    id: 3, username: "Sophia",  age: 23
},
{
    id: 4, username: "Ji Hye",  age: 23
},
{
    id: 5, username: "Edward", age: 30
},
];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   

    console.log("HAHA posted");
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);

    res.send("Created a user");
};

export const getUser = (req, res) => {
  

    const { id } = req.params;

    const foundUser = users.find((user) => 
       user.id == id
    );
   
    res.send(foundUser);
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id != req.params.id);

    res.send(`deleted the user with id ${req.params.id}`);
};

export const updateUser =  (req,res) => {
    let user = users.find((user) => user.id == req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
    res.send(`The user ID ${req.params.id} is now updated` );
};