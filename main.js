Webcam.set({
    //establce el tamaño del width como 350
    width:350 ,
    height:300,
    image_format:'png',
    png_quality:90
});

//crea la variable camera como document.getElementById("camera");
camera = document.getElementById("camera")

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"'+data_uri+'"/>"';
    });
}
//imprimir en consola la version del ml5


classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6bP3HZ4UH/model.json',modelLoaded);
console.log("classifier")
function modelLoaded(){
    //imprime en consola el mensaje modelo cargado
    console.log("modelLoaded")
}

function check(){
    img = document.getElementById('captured_image');
    classifer.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        //imprime en consola el error
        console.log("error")
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuaracy").innerHTML = results[0].confidence.toFixed(3);
    }
}