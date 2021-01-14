

//const work1Link = document.querySelector(".work1-link");
//const work1Language = document.querySelector(".work1-language");
const work1Name = document.querySelector(".work1-name");
const work1Description = document.querySelector(".work1-description");
const work1Stars = document.querySelector(".work1-stargazers_count");

//const work2Link = document.querySelector(".work2-link");
//const work2Language = document.querySelector(".work2-language");
const work2Name = document.querySelector(".work2-name");
const work2Description = document.querySelector(".work2-description");
const work2Stars = document.querySelector(".work2-stargazers_count");



const client_id = "Iv1.89313f83851fa72e";
const client_secret = "b69e61f49e7844d039c01d2f3521df9eb9e5d357";


fetch('https://api.github.com/users/Avi-Tav/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    // console.log(data);
  })
  .catch(function (err) {
    // console.log(err);
  });
  
  function appendData(data) {
    work1Name.innerHTML = `${data[2].name}`;
    //work1Language.innerHTML = `${data[1].language}`;
    work1Description.innerHTML = `${data[2].description}`;
    work1Stars.innerHTML = `&#9734 ${data[2].stargazers_count}`;
    //work1Link.innerHTML = `${data[2].clone_url}`;


    work2Name.innerHTML = `${data[0].name}`;
    //work2Language.innerHTML = `${data[0].language}`;
    work2Description.innerHTML = `${data[0].description}`;
    work2Stars.innerHTML = `&#9734 ${data[0].stargazers_count}`;
    //work2Link.innerHTML = `${data[1].clone_url}`;
}


