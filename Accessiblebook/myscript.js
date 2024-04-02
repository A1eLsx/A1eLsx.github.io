

let pictures= [
'IMG_3410.jpeg',
'IMG_4844.PNG',
];

let imageElement = document.getElementById("statues")
imageElement.src = './imgs/' + pictures[Math.floor(Math.random() * pictures.length)]

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  document.getElementById("text");
  function changeText(){
    text.innerHTML = "Hello " + myText.value + "!";
  }

  let phase = [
    "Mystery", "Romance", "Fantasy", "Action", "Thiller", "Horror"
  ]

let myElement = document.getElementById("text")
  myElement.innerHTML= phase[Math.floor(Math.random()* phase.length)]