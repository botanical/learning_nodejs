var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vronsky'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};


getUser(123, (userObject) => {
  console.log(userObject);
});
