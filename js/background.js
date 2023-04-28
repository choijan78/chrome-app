const images = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bg");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
