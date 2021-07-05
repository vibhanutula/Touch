

canvas = document.getElementById("Circle");
ctx = canvas.getContext('2d');
Color = document.getElementById("Color").value;
Width = document.getElementById("Width").value;

var WidthS = screen.width;
NewW = screen.width - 70;
NewHeight = screen.height - 300;

if(WidthS < 992) {
    document.getElementById("Circle").width = NewW;
    document.getElementById("Circle").height = NewHeight;
    document.body.style.overflow = "hidden";
}

var last_x, last_y;

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    console.log("touchstart");
    last_x = e.touches[0].clientX - offsetLeft;
    last_x = e.touches[0].clientY - offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    console.log("my_touchmove");

    current_touch_X = e.touches[0].clientX - offsetLeft;
    current_touch_Y = e.touches[0].clientY - offsetTop;
        
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_touch_X + "y = " + current_touch_Y);
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_touch_X, current_touch_Y);
        ctx.stroke();

        last_x = current_x; 
        last_y = current_y;
}

function Area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
