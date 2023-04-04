
// Left side image
var randomNumber1 = Math.floor(Math.random()*6) + 1;
// var images = document.querySelectorAll('img').classList[0];
var images = document.querySelectorAll('.img1'); // to get the class = img1; left image.
for (var i = 0; i < images.length; i++) { // For loop
images[i].setAttribute('src', 'images/dice' + randomNumber1 + '.png'); //image[i] means the first image in my case i have just one class="img1", thats why my length is 1. So basically images[i] means img1.
}
// console.log(images);

//////////////////////////////////////////// TESTING SOME CODES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// // var images = document.querySelectorAll('img').classList[0];
// var images = document.querySelectorAll('.dice img', '.dice img'); // to get the class = img1; left image.
// for (var i = 0; i < images.length; i++) { // For loop
// images[i].setAttribute('src', 'images/dice' + randomNumber1 + '.png'); //image[i] means the first image in my case i have just one class="img1", thats why my length is 1. So basically images[i] means img1.
// images[i].setAttribute('src', 'images/dice' + randomNumber1 + '.png');
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Right side image
var randomNumber2 = Math.floor(Math.random()*6) + 1;
// var images = document.querySelectorAll('img').classList[0];
var images2 = document.querySelectorAll('.img2'); // to get the class = img1; left image.
for (var i = 0; i < images2.length; i++) { // For loop
images2[i].setAttribute('src', 'images/dice' + randomNumber2 + '.png'); //image[i] means the first image in my case i have just one class="img1", thats why my length is 1. So basically images[i] means img1.
}
// console.log(images2);


// Changing the Title to Display a Winner
var getHeading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
getHeading.innerHTML = "🏆Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  getHeading.innerHTML = "Player 2 Wins!🏆";
} else {
  getHeading.innerHTML = "Draw!";
}
