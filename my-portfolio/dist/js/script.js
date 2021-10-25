

let work1Link = document.querySelector(".work1-link");
let work1Language = document.querySelector(".work1-language");
let work1Name = document.querySelector(".work1-name");
let work1Description = document.querySelector(".work1-description");
let work1Stars = document.querySelector(".work1-stargazers_count");

let work2Link = document.querySelector(".work2-link");
let work2Language = document.querySelector(".work2-language");
let work2Name = document.querySelector(".work2-name");
let work2Description = document.querySelector(".work2-description");
let work2Stars = document.querySelector(".work2-stargazers_count");

let work3Link = document.querySelector(".work3-link");
let work3Language = document.querySelector(".work3-language");
let work3Name = document.querySelector(".work3-name");
let work3Description = document.querySelector(".work3-description");
let work3Stars = document.querySelector(".work3-stargazers_count");

let work4Link = document.querySelector(".work4-link");
let work4Language = document.querySelector(".work4-language");
let work4Name = document.querySelector(".work4-name");
let work4Description = document.querySelector(".work4-description");
let work4Stars = document.querySelector(".work4-stargazers_count");

let work5Link = document.querySelector(".work5-link");
let work5Language = document.querySelector(".work5-language");
let work5Name = document.querySelector(".work5-name");
let work5Description = document.querySelector(".work5-description");
let work5Stars = document.querySelector(".work5-stargazers_count");



let client_id = "Iv1.89313f83851fa72e";
let client_secret = "b69e61f49e7844d039c01d2f3521df9eb9e5d357";


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
    work1Name.innerHTML = `${data[0].name}`;
    work1Language.innerHTML = `${data[0].language}`;
    work1Description.innerHTML = `${data[0].description}`;
    work1Stars.innerHTML = `&#9734 ${data[0].stargazers_count}`;
    work1Link.href = `${data[0].clone_url}`;


    work2Name.innerHTML = `${data[1].name}`;
    work2Language.innerHTML = `${data[1].language}`;
    work2Description.innerHTML = `${data[1].description}`;
    work2Stars.innerHTML = `&#9734 ${data[1].stargazers_count}`;
    work2Link.href = `${data[1].clone_url}`;

    work3Name.innerHTML = `${data[2].name}`;
    work3Language.innerHTML = `${data[2].language}`;
    work3Description.innerHTML = `${data[2].description}`;
    work3Stars.innerHTML = `&#9734 ${data[2].stargazers_count}`;
    work3Link.href = `${data[2].clone_url}`;

    work4Name.innerHTML = `${data[3].name}`;
    work4Language.innerHTML = `${data[3].language}`;
    work4Description.innerHTML = `${data[3].description}`;
    work4Stars.innerHTML = `&#9734 ${data[3].stargazers_count}`;
    work4Link.href = `${data[3].clone_url}`;
    
    work5Name.innerHTML = `${data[4].name}`;
    work5Language.innerHTML = `${data[4].language}`;
    work5Description.innerHTML = `${data[4].description}`;
    work5Stars.innerHTML = `&#9734 ${data[4].stargazers_count}`;
    work5Link.href = `${data[4].clone_url}`;
}


