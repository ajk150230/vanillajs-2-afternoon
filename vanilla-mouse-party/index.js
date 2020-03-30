var mousePosition =  { X: 0, Y:0 };
let drawId;
function getRandomNumber(min, max){
    return Math.round(Math.random()*(max - min +1)) + min;
};
window.addEventListener('mousemove', function(event){
    mousePosition.x = event.pageX
    mousePosition['y'] = event.pageY
    console.log(mousePosition.X)
});
function draw (){
    return setInterval(function (){
        let container = document.getElementById('wrap');
        const color = `background:rgb(${getRandomNumber(0,255)},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
          const ballSize = getRandomNumber(200, 10);
          const size = `height:${ballSize}px; width:${ballSize}px;`;
          const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
          )}px;`;
          const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
          )}px; `;
          const style = `${left}${top}${color}${size}`;
          let ball = document.createElement('div')
          ball.classList.add('ball');
          ball.style = style;
          ball.addEventListener('animationend', function (event){
              event.target.remove()
          });
          container.appendChild(ball);
    },20 );
}

window.addEventListener('mouseover',function (){
    drawId = draw()
})

window.addEventListener('mouseout', function (){
    clearInterval(drawId)
})
