const fetchUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "raj", email: "raj@gmail.com", address: "agra" },
        2: { name: "raj", email: "raj@gmail.com", address: "agra" }
      };

      const user = users[id];

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1000); 
  });
};
fetchUser(1).then(user => console.log(user))