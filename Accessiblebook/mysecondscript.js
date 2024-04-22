let myPhoto = document.getElementById("stat");
let photos = [
"IMG_3410.jpeg",
"IMG_4844.PNG",
"IMG_5196.jpeg",
"IMG_5236.jpeg",
"IMG_8873.jpeg",
"IMG_8874.jpeg",
"IMG_8875.jpeg"
]
console.log(photos)
myPhoto.src = './imgs/' + photos[Math.floor(Math.random() * photos.length)];