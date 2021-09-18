function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X-KJJNOgE/model.json',modelloaded);
}
function draw(){
image(video,0,0,300,300);
x.classify(video,gotresult);
}
function modelloaded(){
console.log("modelisloaded");
}
function gotresult(error,result){
if(error){
console.log(error);
}
else{
console.log(result);
document.getElementById("result_object_name").innerHTML=result[0].label;
document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
}
}