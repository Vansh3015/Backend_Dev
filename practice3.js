// let user;
// setTimeout(() => {
// user={
//     name:"abc",
//     addres:"Mathura"
// }
//     console.log("I am");

    

// },0);

// //console.log(user);

// const fetchuser=()=>{
//     return new Promise((resolve,reject)=> {
//         const user1={1:{name:"Rohit", email:"virat@gmaail.com", phone:"8009888080",address:"Mathura"}}

//     })
// }

//  user=users[userId]
//  if(user){
//     resolve(user);
//  }
//  else{
//     reject("not found");
//  }


let user;

setTimeout(() => {
  user = {
    name: "abc",
    address: "Mathura"
  };
  console.log("I am");
}, 0);

console.log(user);

const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {

    const users = {
      1: {
        name: "Rohit",
        email: "virat@gmail.com",
        phone: "8009888080",
        address: "Mathura"
      }

    };

    const user = users[userId];

    if (user) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
};

fetchUser(1)
  .then(user => {
    console.log("Fetched User:", user);
  })
  .catch(error => {
    console.log(error);
  });