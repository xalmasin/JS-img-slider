        
var images = ["https://source.unsplash.com/random/100x100",
            "https://source.unsplash.com/user/erondu/100x100",
            "https://source.unsplash.com/collection/190727/100x100"];

//Track the slide
var slide = 0;
var img = document.getElementById('img');

var slider = function(){
if(slide === 0){
    slide = 1;
    img.src = images[0];
    console.log("1");
}
else if (slide === 1){
    slide = 2;
    img.src= images[1];
    console.log("2");
}
else{
    slide = 0;
    img.src = images[2]
    console.log("3");
}
};
//Runs every 2 seconds
setInterval(slider, 2000);