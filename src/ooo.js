// import axios from "axios";

import axios from "axios";

// axios
// .get("https://jsonplaceholder.typicode.com/users")
// .then((repsons) => {
//   const users = repsons.data;
//  const u= users.lenght=5
//  console.log(u);
  
// })
// .catch((e) => {
//   const erroeMa = e.message;
//   console.log(erroeMa);
// });
axios.get("https://jsonplaceholder.typicode.com/users/2").then((repsons) => {
    const users = repsons.data
   
   console.log(users+'user');
    
  })
  .catch((e) => {
    const erroeMa = e.message;
    console.log(erroeMa);
  });