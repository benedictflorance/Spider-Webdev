var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById('bow');
var bowX = 50;
var bowY = (canvas.height-123)/2;
var fromx=45, tox=120;
var fromy,toy;
var bullX=650;
var bullY=45;
var bullSpeed=3;
fromy=toy=(canvas.height+4)/2;
var wPressed = false;
var sPressed = false;
var space=false;
var lives=10;
var score=0;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 87) {
        wPressed = true;
    }
    else if(e.keyCode == 83) {
        sPressed = true;
    }
    else if(e.keyCode==32){
        space = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 87) {
        wPressed = false;
    }
    else if(e.keyCode == 83) {
        sPressed = false;
    }
}
unction drawBow() {
    ctx.drawImage(image,bowX,bowY);
}
function drawArrow(){
                var headlen = 10;
                var angle = Math.atan2(toy-fromy,tox-fromx);
                //arrow
                ctx.beginPath();
                ctx.moveTo(fromx, fromy);
                ctx.lineTo(tox, toy);
                ctx.strokeStyle = "#cc0000";
                ctx.lineWidth = 3;
                ctx.stroke();
                //arrowhead
                ctx.moveTo(tox, toy);
                ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
                ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));
                ctx.lineTo(tox, toy);
                ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));
                //draws the paths created above
                ctx.strokeStyle = "#cc0000";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.fillStyle = "#cc0000";
                ctx.fill();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation ='destination-over';
    drawArrow();
    drawBow();
    drawBullsEye();
    document.getElementById("lives").textContent=lives+" arrow(s) in your quiver!";
	document.getElementById("score").textContent="Score: "+score;
    if(wPressed&&bowY>2&&!space){
    	bowY-=4;
    	fromy-=4;
    	toy-=4;
    }
    else if(sPressed&&bowY<canvas.height-125&&!space){
    	bowY+=4;
    	fromy+=4;
    	toy+=4;
    }
    else if(space)
    {
    	fromx+=8;
    	tox+=8;
    }
    if(fromx>canvas.width&&lives)
    {
   	lives--;
    fromx=45; 
    tox=120
	fromy=toy=bowY+62;
	space=false;
	drawArrow();
    }
    if(bullY<45||bullY>canvas.height-42)
    {bullSpeed=-1*bullSpeed;}
    bullY+=bullSpeed;
    if(from)
    if(!lives)
    {
    	alert("GAME OVER");
    	document.location.reload();
    }
requestAnimationFrame(draw);
    }
requestAnimationFrame(draw);