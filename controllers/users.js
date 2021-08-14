import { v4 as uuid } from 'uuid';

let users = [{
    id: 1, username: "Jin Woo Park", age: 33, rating: 5, permission: 1,
},
{
    id: 2, username: "Yunica",  age: 25, rating: 4, permission: 0,
},
{
    id: 3, username: "Sophia",  age: 23, rating: 5, permission: 1,
},
{
    id: 4, username: "Ji Hye",  age: 23, rating: 5, permission: 0,
},
{
    id: 5, username: "Edward", age: 30, rating: 2, permission: 0,
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
    user.rating = req.body.rating;
    user.permission = req.body.permission;

    console.log(`username has been updated to ${req.body.username}. the rating has been updated to ${req.body.age}`)
    res.send(`The user ID ${req.params.id} is now updated` );
};