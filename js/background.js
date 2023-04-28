const images = [
  "https://www.fodors.com/wp-content/uploads/2018/07/shutterstock_1016363830-2048x1334.jpg",
  "https://cdn.dribbble.com/users/4825248/screenshots/10956321/media/2d98709690dc5045b989958bbf836d30.jpg?compress=1&resize=1600x1200&vertical=top",
  "https://cdn.dribbble.com/users/4825248/screenshots/10571295/media/49196f6270582f72a0e18cac3a21aa15.jpg?compress=1&resize=1600x1200&vertical=top",
  "https://i.pinimg.com/originals/37/a2/7e/37a27e9d963c1521322de106fdfcd170.jpg",
  "https://i.pinimg.com/originals/66/3b/b2/663bb25967e005b2ee3c36d5a986773c.jpg",
  "https://i.pinimg.com/564x/21/bb/5a/21bb5adbc54f0dc7a20bb256f13bc818.jpg",
  "https://64.media.tumblr.com/0fad05d961e6544deb5a590d77c1d661/tumblr_ncgnfhusyW1t7xi3po1_1280.jpg",
  "https://i.pinimg.com/originals/3b/f1/80/3bf180780bf5a93f1313fd74845e174a.jpg",
  "https://t1.daumcdn.net/cfile/tistory/99AD7A3A5A82810E0A?original",
  "https://t1.daumcdn.net/cfile/tistory/99E46E3A5A82810F1C?original",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9989403A5A8281100E",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bg");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);
