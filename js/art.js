function DrawProduct(canvas,product) {
  const context = canvas.getContext("2d");
  if (!context) return;

  function Box(x,y,width,height,radius,color) {
    context.beginPath();
    context.roundRect(x,y,width,height,radius);
    context.fillStyle = color;
    context.fill();
  }

  function Oval(x,y,radiusX,radiusY,color) {
    context.beginPath();
    context.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2);
    context.fillStyle = color;
    context.fill();
  }

  function Line(points,width,color) {
    context.beginPath();
    context.moveTo(...points[0]);
    for (const point of points.slice(1)) context.lineTo(...point);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
  }

  const {background,color,shape} = product;
  const shade = context.createLinearGradient(110,0,320,280);
  shade.addColorStop(0,"#ffffff61");
  shade.addColorStop(1,"#182c351a");
  Box(0,0,400,280,0,background);
  Box(0,0,400,280,0,shade);
  Oval(211,224,93,15,"#252b3520");
  Oval(211,222,69,7,"#252b3521");
  const gloss = context.createLinearGradient(120,60,285,209);
  gloss.addColorStop(0,"#ffffff62");
  gloss.addColorStop(.52,"#ffffff00");
  gloss.addColorStop(1,"#151f364f");

  if (shape==="generated") {
    Box(123,62,154,149,18,color);
    Box(123,62,154,149,18,gloss);
    Box(137,79,126,113,12,"#ffffffd1");
    context.fillStyle = color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = 'bold 16px "Microsoft JhengHei", sans-serif';
    const label = Array.from(product.label);
    context.fillText(label.slice(0,7).join(""),200,125,108);
    if (label.length>7) context.fillText(label.slice(7,13).join("")+(label.length>13?"…":""),200,147,108);
    context.font = '12px "Microsoft JhengHei", sans-serif';
    context.fillText("虛擬示意",200,173,95);
  } else if (shape==="headphones") {
    context.beginPath();
    context.ellipse(201,139,70,68,0,Math.PI,Math.PI*2);
    context.strokeStyle = "#23352f";
    context.lineWidth = 22;
    context.stroke();
    context.beginPath();
    context.ellipse(201,135,71,68,0,Math.PI,Math.PI*2);
    context.strokeStyle = color;
    context.lineWidth = 16;
    context.stroke();
    Line([[130,138],[125,167],[140,188]],11,color);
    Line([[272,138],[278,165],[262,188]],11,color);
    Box(111,151,51,65,20,"#293631");
    Box(240,151,51,65,20,"#293631");
    Box(111,151,35,61,15,color);
    Box(256,151,35,61,15,color);
    Box(111,151,35,61,15,gloss);
    Box(256,151,35,61,15,gloss);
  } else if (shape==="lamp") {
    Oval(196,214,60,13,color);
    Oval(196,208,55,9,gloss);
    Line([[194,207],[194,132],[224,97]],15,color);
    Oval(224,96,10,10,"#654d3e");
    context.save();
    context.translate(232,91);
    context.rotate(-.27);
    Box(-54,-10,109,24,12,color);
    Box(-49,6,99,9,5,"#fef2c0");
    Box(-54,-10,109,15,10,gloss);
    context.restore();
  } else if (shape==="bag") {
    Box(176,55,48,28,13,"#333832");
    Box(184,60,32,21,8,background);
    Box(122,90,23,107,10,"#41453d");
    Box(255,90,23,107,10,"#41453d");
    Box(136,72,128,149,30,color);
    Box(136,72,128,149,30,gloss);
    Box(148,146,104,62,13,"#1c241b36");
    Box(151,142,98,60,12,color);
    Box(151,142,98,60,12,gloss);
    Line([[158,155],[242,155]],3,"#353834");
    Line([[233,155],[233,165]],3,"#e0c9a2");
    Box(185,102,30,15,4,"#eadbc1");
  } else if (shape==="desktop" || shape==="bundle") {
    const isBundle = shape==="bundle";
    const towerX = isBundle ? 242 : 158;
    if (isBundle) {
      Box(88,78,147,96,8,"#272e34");
      Box(95,85,133,77,5,color);
      Box(95,85,133,77,5,gloss);
      Box(151,168,21,26,4,"#3b4149");
      Box(126,191,73,7,4,"#3b4149");
      Box(108,207,105,12,4,"#4d555c");
    }
    Box(towerX,62,86,151,10,"#313640");
    Box(towerX+5,65,62,143,8,color);
    Box(towerX+5,65,62,143,8,gloss);
    Oval(towerX+35,83,5,5,"#d8f4a8");
    for (let y=105; y<=139; y+=8) Box(towerX+17,y,37,3,1,"#27313b");
    Box(towerX+7,211,13,5,2,"#313640");
    Box(towerX+64,211,13,5,2,"#313640");
  } else if (shape==="keyboard") {
    Box(97,112,157,74,10,color);
    for (let row=0; row<4; row++) {
      for (let column=0; column<10; column++) Box(106+14*column,120+15*row,10,10,2,"#e5e0eb");
    }
    Box(269,113,38,65,18,color);
    Box(286,122,4,13,2,"#e5e0eb");
  } else if (shape==="part") {
    Box(127,83,145,118,10,color);
    Box(151,106,56,52,5,"#303b39");
    Box(160,114,38,36,3,gloss);
    Box(218,99,10,74,3,"#d4d5cc");
    Box(236,99,10,74,3,"#d4d5cc");
    Box(151,178,98,7,3,"#323f3e");
  } else {
    Box(162,90,76,128,19,color);
    Box(162,90,76,128,19,gloss);
    Box(168,65,64,35,10,"#283530");
    Box(168,65,64,35,10,gloss);
    Line([[169,97],[231,97]],3,"#e7e7d69f");
    Box(178,79,13,7,3,"#d9e1d5");
    Box(185,150,30,4,2,"#ffffffa6");
  }
}
