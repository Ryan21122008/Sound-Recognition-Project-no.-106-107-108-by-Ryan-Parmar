function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/FuGpMl7-3/model.json", modelloaded);
}
function modelloaded(){
    classifier.classify(gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
      console.log(result);
      var redno = Math.floor(Math.random() * 255) + 1;
      var greenno = Math.floor(Math.random() * 255) + 1;
      var blueno = Math.floor(Math.random() * 255) + 1;
      document.getElementById("soundname").innerHTML = "The sound is - " + result[0].label;
      document.getElementById("accuracy").innerHTML = "Accuracy - " + (result[0].confidence*100).toFixed(2) + " %";
      document.getElementById("soundname").style.color = "rgb(" + redno + " , " + greenno + " , " + blueno + ")";
      document.getElementById("accuracy").style.color = "rgb(" + redno + " , " + greenno + " , " + blueno + ")";
      if(result[0].label == "Barking"){
          image.src = "dog.gif";
        }
        if(result[0].label == "Background Noise"){
          image.src = "bg.gif";
          }
          if(result[0].label == "Roaring"){
          image.src = "lion.gif";
          }
          if(result[0].label == "Neighing"){
            image.src = "horse.gif";
          }
    }
}
