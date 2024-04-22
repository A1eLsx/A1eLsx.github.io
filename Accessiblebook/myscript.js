// let myElement = document.getElementById("stat");
// console.log(myElement)

// let Need = document.getElementById("stat");
// console.log(Need)


// photos = document.getElementById("images").getAttribute('alt');


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  

  let textBox = document.getElementById("text")
  console.log(textBox)
  let searchBox = document.getElementById("search-box");
  
      
  
  textBox.onfocus = function() {
    console.log("focused!");
    searchBox.classList.add("border-searching");
  }
  
  textBox.onblur = function() {
    console.log("blur!");
    searchBox.classList.remove("border-searching");
  }


  let place = [" Mystery ", "Action", "Graphic", "Comics", "Painting"];
  let myElement = document.getElementsByName('home')[0].placeholder= place[Math.floor(Math.random()* place.length)];


  const filterImages =() => {
    let text = document.getElementById("text");
    // let img = document.getElementById("images");
    let li = document.getElementsByTagName("li");
    let filter = text.value.toUpperCase();
    for (i = 0; i <li.length; i++){
      let imageText = li[i].getElementsByTagName("p")[0];
      
      let textValue= imageText.textContent || imageText.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = " ";
      } else {
        li[i].style.display = "none";
      }
    }
    // textValue.remove(filter)
  

  }


  
  
//   let myPhoto = document.getElementById("stat");
//   let photos = [
//   "IMG_3410.jpeg",
//   "IMG_4844.PNG",
//   "IMG_5196.jpeg",
//   "IMG_5236.jpeg",
//   "IMG_8873.jpeg",
//   "IMG_8874.jpeg",
//   "IMG_8875.jpeg"
//   ]
// console.log(photos)
// myPhoto.src = './imgs/' + photos[Math.floor(Math.random() * photos.length)];

// let text=document.getElementById("text");
// let ul=document.getElementById("imagelist");
// let li= ul.getElementByTagName("li");

