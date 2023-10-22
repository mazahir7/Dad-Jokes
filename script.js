"use strict";

const jokeLine = document.querySelector("p");
const btn = document.querySelector(".btn");

generateDadJoke();

btn.addEventListener("click", generateDadJoke);


async function generateDadJoke() {

  const config = { headers: { "Accept": "application/json" } };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();


  jokeLine.innerText = data.joke;
}


// function generateDadJoke() {

//   const config = { headers: { "Accept": "application/json" } };

//   fetch("https://icanhazdadjoke.com", config)
//     .then(res => res.json())
//     .then(data => {
//       jokeLine.innerText = data.joke;
//     })
// }