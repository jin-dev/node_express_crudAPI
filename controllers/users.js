import { v4 as uuid } from 'uuid';


//initial values for Employees

let users = [{
    id: 1, username: "Jin Woo Park", age: 33, rating: 5, permission: 1, feedback: '',
},
{
    id: 2, username: "Yunica",  age: 25, rating: 4, permission: 0, feedback: '',
},
{
    id: 3, username: "Sophia",  age: 23, rating: 5, permission: 1, feedback: '',
},
{
    id: 4, username: "Ji Hye",  age: 23, rating: 5, permission: 0, feedback: '',
},
{
    id: 5, username: "Edward", age: 30, rating: 2, permission: 0, feedback: '',
},
];


//Get Method
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

// Post Method
export const createUser = (req, res) => {   

    console.log("HAHA posted");
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);

    res.send("Created a user");
};

// get a single user
export const getUser = (req, res) => {
  

    const { id } = req.params;

    const foundUser = users.find((user) => 
       user.id == id
    );
   
    res.send(foundUser);
};

// delete method
export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id != req.params.id);

    res.send(`deleted the user with id ${req.params.id}`);
};

//patch method
export const updateUser =  (req,res) => {
    console.log("updated");
    let user = users.find((user) => user.id == req.params.id);
    

    if (req.body?.feedback) {
        user.feedback = req.body?.feedback;
    } else {
        user.username = req.body?.username;
        user.rating = req.body?.rating;
        user.permission = req.body?.permission;
    }
   
    
    res.send(`The user ID ${req.params.id} is now updated`);
};
