var dog = 0
var cat = 0

function startClassification(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3TPZTNXw-/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
        }
        else{
            console.log(results);
            random_number_r = Math.floor(Math.random()*255) + 1;
            random_number_g = Math.floor(Math.random()*255) + 1;
            random_number_b = Math.floor(Math.random()*255) + 1;
            document.getElementById("heading").innerHTML = 'Detected Dog: ' + dog + ' | Detected Cat- ' + cat;
            document.getElementById("result_sound").innerHTML = 'Detected voice is of - ' + results[0].label;
            document.getElementById("heading").style.color = "rgb("+random_number_r+","+random_number_g+", "+random_number_b+")";
            document.getElementById("result_sound").style.color = "rgb("+random_number_r+","+random_number_g+", "+random_number_b+")";
                    
        img1= document.getElementById('ear');

        if(results[0].label=="Clap"){
            img1.src="dog.gif";
            dog= dog + 1;
        }
        else if(results[0].label=="Snap"){
            img1.src="cat.gif";
            cat= cat + 1;
        }
        else{
           img1.src= "ear.jpg";
        }
}
}