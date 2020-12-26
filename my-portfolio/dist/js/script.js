const work1Link = document.querySelector(".work1-link");
const work1Language = document.querySelector(".work1-language");
const work1Name = document.querySelector(".work1-name");
const work1Description = document.querySelector(".work1-description");
const work1Stars = document.querySelector(".work1-stargazers_count");


const client_id = "Iv1.89313f83851fa72e";
const client_secret = "b69e61f49e7844d039c01d2f3521df9eb9e5d357";

// const fetchUser = () => {
//     const api_call = fetch(`https://api.github.com/users/Avi-Tav/repos${user}?client_is=${client_id}&client_secret=${client_secret}`);

// const data = api_call.json();
// return { data }
// }

// const showData = () => {
//     fetchUser(inputValue.value).then((res) => {
//         console.log(res);
//     })
// };

fetch('https://api.github.com/users/Avi-Tav/repo')
    .then(response => response.json())
		.then(data => document.body.append())
		.catch(error => console.error(error));