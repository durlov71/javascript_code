//......................Fetch API with async await.......................



// const gitAPI = fetch("https://api.github.com/users/durlov71");

// gitAPI
//     .then((user) => user.json())
//     .then((profile) => console.log(profile))
//     .catch((err) => console.log(Error(err)));
// console.log(gitAPI)



async function getInfoFromGit() {
    try {
        const res = await fetch("https://api.github.com/users/durlov71");
        const profile = await res.json();
        console.log(profile);
    } catch (error) {
        new Error(error)
    }

}
getInfoFromGit();