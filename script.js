const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    directory: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
//refactor this logic to use a film card template instead



const filmCard=document.createElement("section");

const title=document.createElement("h1");
title.textContent = films[0].title;

const director=document.createElement("p");
director.textContent=films[0].director;

filmCard.append(title,director);



document.body.appendChild(filmCard)










