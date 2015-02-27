var dataObj;
var oldObj;
var tempBool = false;

  

   
setInterval(function(){
  if(glob.dataObj !== undefined){
    dataObj = glob.dataObj;
  }

  if(dataObj.temperature !== oldObj){
    tempBool = true;
    console.log(dataObj.temperature);
    oldObj = dataObj.temperature;
  } else {
    tempBool = false;
  }

}, 100);
