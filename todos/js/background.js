const images = [
    "adam-nowakowski-_dRjxWgse48-unsplash.jpg", 
    "jeremy-bezanger-9opiHRPIvR0-unsplash.jpg", 
    "nicholas-cappello-Wb63zqJ5gnE-unsplash.jpg",
    "patrick-weissenberger-uJhgEXPqSPk-unsplash.jpg",
    "aditya-vyas-6Ih4UoqzaAs-unsplash.jpg",
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//prepend(bgImage) 젤 앞으로 나오게됨