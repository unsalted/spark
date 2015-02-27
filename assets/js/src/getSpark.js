/*! Get spark data */


$(function() {
  //YOUR DEVICE ID!!!
  var deviceID    = "53ff6e066667574825562467";
  var accessToken = "1d5d8c64bdf0dee6d57030e372f9d6a7a9c682d5";
  //SENSOR NAME
  var getVar = "dataOut";

  var getURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + getVar + "/";

  setInterval(function(){
    console.log('request');
    $.get(getURL,{ access_token: accessToken }, function(data){
      var dataObj = JSON.parse(data.result);
      glob.dataObj = dataObj;
    });
  },5000);

  
        
});      
