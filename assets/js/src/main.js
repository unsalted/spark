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
      var obj = JSON.parse(data);
      var dtObj = JSON.parse(obj.result);
      console.log(dtObj);
      //$('#output').html(dtObj.name+':&nbsp;'+stObj.result);
    });
  },5000);

  
        
});      
