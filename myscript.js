alert("REFRESHED");

let pictures= [
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_3410.jpeg", 
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_8873.jpeg",
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_8874.jpeg",
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_8875.jpeg",
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_5236.jpeg",
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_5196.jpeg",
"/Users/alexwedderburn/Desktop/ProductDesign/Accessiblebook/imgs/IMG_4844.PNG"
];

let imageElement = document.getElementById("statues")
imageElement.src = pictures[Math.floor(Math.random() * pictures.length)]