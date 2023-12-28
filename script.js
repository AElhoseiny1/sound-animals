//https://teachablemachine.withgoogle.com/models/VYHtgMnCx/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VYHtgMnCx/model.json", modelready)
}

function modelready(){
    classifier.classify(gotResults)
}

function gotResults(){
    if(error){
        console.error(error)
    }

    console.log(results)
    random_number_r = Math.floor(Math.random()*255)+1
    random_number_g = Math.floor(Math.random()*255)+1
    random_number_b = Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML = "I can hear " + results[0].label
    document.getElementById("result_confidence").innerHTML = "Accuracy " + (results[0].confidence*100).toFixed(2)
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+", "+random_number_b+")"
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")"
    img1 = document.getElementById("bg")
    img2 = document.getElementById("cat")
    img3 = document.getElementById("dog")
    
    if(results[0].label=="Barking"){
        img1.src = "catGIF.gif"
        img2.src = "img2.png"
        img3.src = "img3.png"
        
    }
    else if(results[0].label=="Meowing"){
        img1.src = "img1.png"
        img2.src = "dogGIF.gif"
        img3.src = "img3.png"
        
    }
    else{
        img1.src = "img1.png"
        img2.src = "img2.png"
        img3.src = "earGIF.gif"
        
    }

    
}
