var pmousex,pmousey
var mousex,mousey
function preload(){
  classifier=ml5.imageClassifier('DoodleNet')
}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  function classifyCanvas(){
classifier.classify(canvas,gotresult)
  }
  function gotresult(results){
    console.log(results)
  }
  function clear(){
    background("white")
  }
  function draw(){
    strokeWeight(13)
    stroke("black")
    if(mouseIsPressed){
      line(pmousex,pmousey,mousex,mousey)
    }
  }