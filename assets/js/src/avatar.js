var dataObj;
var oldObj;
var objBool = false;

  

   
setInterval(function(){
  if(glob.dataObj !== undefined){
    dataObj = glob.dataObj;
  }

  if(dataObj !== oldObj){
    objBool = true;
    console.log(dataObj);
    oldObj = dataObj;
  } else {
    objBool = false;
  }

}, 100);

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = 'black';
