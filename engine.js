function WarpDrive(){
	this = {
		Scene: function(){},
		Obj: function(){},
		Resource: function(){}
	}
}

function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}
var canvas = document.getElementById('viewport');
var context = canvas.getContext('2d');
var imageData = context.createImageData(canvas.width, canvas.height);
context.fillStyle = "black";
context.font = "bold 72px Arial";
var timestamp = performance.now();
var avg = 60;
function render(){
	for(var i=0;i<100000;i++){
		setPixel(imageData, Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255),255);
	}
	context.putImageData(imageData, 0, 0);
	avg = ((avg*9)+Math.round(1000/(performance.now()-timestamp)))/10;
	context.fillText(Math.round(avg)+'fps', 100, 100);
	timestamp = performance.now();
	requestAnimationFrame(render);
}
render();