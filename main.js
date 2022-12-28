function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cN7WfnTbY/model.json",modelready);

}
function modelready()
{
    classifier.classify(gotResult);
}
function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    } 
    else 
    {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I CAN HEAR - '+
        results[0].label;
        
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        
       // img = document.getElementById('Screenshot 2022-12-03 130609.png');
       img = document.getElementById("image");

        if(results[0].label == "barking")
        {
            img.src = 'Screenshot 2022-12-28 210933.png';
        }
        else if(results[0].label == "meowing")
        {
            img.src = 'Screenshot 2022-12-28 211145.png';   
        }
        else if(results[0].label == "roaring")
        {
            img.src = 'Screenshot 2022-12-28 211906.png';
        } 
        else
        {
            img.src = 'Screenshot 2022-12-03 130609.png';
        }
    }
}