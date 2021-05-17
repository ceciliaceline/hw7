//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var mouse = {
  x: 0,
  y: 0
}

canvas.addEventListener("mousemove",function(evt){                          mouse.x = evt.offsetX,              mouse.y = evt.offsetY          })

var time = 0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0,350)
  ctx.lineTo(400,350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()

  //sides
  ctx.beginPath()
  ctx.moveTo(150,150)
  ctx.lineTo(100,150-mouse.y/7)
  ctx.lineTo(100,250-(time%5)-mouse.y/7)
  ctx.lineTo(150,250-mouse.y/7)
  ctx.closePath()
  
  ctx.fillStyle="#30668a"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(250,150)
  ctx.lineTo(300,150-mouse.y/7)
  ctx.lineTo(300,250-(time%5)-mouse.y/7)
  ctx.lineTo(250,250-mouse.y/7)
  ctx.closePath()
  
  ctx.fillStyle="#30668a"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //sand
  ctx.fillStyle="#d7e1c8"
  ctx.fillRect(0,350,400,50)
  
  //body
  ctx.beginPath()
  ctx.moveTo(150,50)
  ctx.lineTo(100,350)
  ctx.lineTo(300,350)
  ctx.lineTo(250,50)
  ctx.closePath()
  
  ctx.fillStyle="#30668a"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //door
  ctx.beginPath()
  ctx.arc(200,300,25,Math.PI*2,Math.PI,true)
  ctx.lineTo(175,350)
  ctx.lineTo(225,350)
  ctx.closePath()
 
  ctx.fillStyle="#9f702c"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //brows
  ctx.beginPath()
  ctx.moveTo(150,150)
  ctx.lineTo(150,130)
  ctx.lineTo(250,130)
  ctx.lineTo(250,150)
  ctx.closePath()
  
  ctx.fillStyle="#74aac2"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //nose
  ctx.beginPath()
  ctx.moveTo(190,150)
  ctx.lineTo(175,250)
  ctx.lineTo(225,250)
  ctx.lineTo(210,150)
  ctx.closePath()
  
  ctx.fillStyle="#74aac2"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //eyes
  ctx.beginPath()
  ctx.arc(170,167,15,0,Math.PI*2)
  
  ctx.fillStyle="#3982c5"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(170,167,8,0,Math.PI*2)
  
  ctx.fillStyle="#74aeeb"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(230,167,15,0,Math.PI*2)
  
  ctx.fillStyle="3982c5"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(230,167,8,0,Math.PI*2)
  
  ctx.fillStyle="#74aeeb"
  ctx.fill()
  ctx.stroke()
  
  //boat
  ctx.beginPath()
  let boatx = time%440-40
  ctx.moveTo(boatx,340)
  ctx.lineTo(boatx+10,365)
  ctx.lineTo(boatx+30,365)
  ctx.lineTo(boatx+40,340)
  ctx.closePath()
  
  ctx.fillStyle="#dadada"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(boatx,340)
  ctx.lineTo(boatx+4,350)
  ctx.lineTo(boatx+36,350)
  ctx.lineTo(boatx+40,340)
  ctx.closePath()
  
  ctx.fillStyle="#C85C51"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(boatx+10,365,5,0,Math.PI*2)
  ctx.arc(boatx+30,365,5,0,Math.PI*2)
  
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
  
  //mouse
  ctx.beginPath()
  ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
}
draw()

setInterval(draw,30)