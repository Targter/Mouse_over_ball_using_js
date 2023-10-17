
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    
    let alpha = Math.random()*1; 
    const rgba = `rgba(${red},${green},${blue},${alpha})`;
    return rgba;
}

const box = document.querySelector('.box')
// document.querySelector(".box").append(balls);


function createBalls(){
    // create a ball div
    const balls = document.createElement("div");
    // add width to the ball and height
    let widthval = Math.floor(Math.random()*50)
    // balls.classList.add('ballclass');
    balls.style.width=`${widthval}px`;
    balls.style.height=`${widthval}px`;
    // left positon of the ball
    let leftval = Math.floor(Math.random()*440)
    balls.style.left=`${leftval}px`
    // time of animation of the balls
    let duration = Math.floor(Math.random()*25+5)
    balls.style.animationDuration=`${duration}s`
    
    balls.style.background = getRandomColor();

    balls.addEventListener('animationend',()=>{
        box.removeChild(balls)
    })
    document.querySelector('.box').append(balls);
}

for(let i = 0 ;i<40;i++){
    createBalls();
}

setInterval(()=>{
    for(let i = 0 ;i<30;i++){
        createBalls();
    }
},100000)




// styleElement.appendChild(document.createTextNode(keyframes));


