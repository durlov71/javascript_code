//.......................Fetch API.......................>>>>>>>>>>>>>>>>>>



const gitAPI = fetch("https://api.github.com/users/durlov71");

gitAPI
    .then((user) => user.json())
    .then((profile) => console.log(profile))
    .catch((err) => console.log(Error(err)));
console.log(gitAPI);