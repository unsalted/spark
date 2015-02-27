// -----------------
// declare sensors
// -----------------

int temperature = 0.0; //Nick: temp
int lightSensor = A0; //Shan: light sensor input pin
int lightValue = 0; //Shan: the variable to store value from lightSensor
int IRsensor = A1; //Shan: IR sensor input
int IRvalue = 0; //Shan: variable to store value from IRsensor
int x1 , y1, z1; //SHan: accelerometer sensor 

// Create a variable that will store the temperature value
double temperature = 0.0;

char publishString[64];

void setup()
{
  // Register a Spark variable here
  //Spark.variable("json", &publishJson, CHAR);
  Spark.variable("dataOut",&publishString, STRING);
  
  // Declare pins
  pinMode(A2,INPUT);  //x1
  pinMode(A3,INPUT);  //y1  
  pinMode(A4,INPUT);  //z1
  pinMode(A7, INPUT); //temp
  
}

void loop()
{
//Sensors

  lightValue = analogRead(lightSensor); //Shan: analog value from light sensor

  IRvalue = analogRead(IRsensor); //Shan: analog value from IR sensor

  x1 = analogRead(A2);       // read analog input pin 0
  y1 = analogRead(A3);       // read analog input pin 1
  z1 = analogRead(A4);       // read analog input pin 1
    
//Temp

  int reading = 0;
  double voltage = 0.0;

  reading = analogRead(A7);
  // Calculate the voltage from the sensor reading
  voltage = (reading * 3.3) / 4095;
  // Calculate the temperature and update our static variable
  temperature = (voltage - 0.5) * 100;
// End Temp
  
  sprintf(publishString,"{\"temperature\": %f, \"light\": %i, \"IR\": %i, \"accelerometer\": {\"x\": %i, \"y\": i%, \"z\"}}",temperature,lightValue,IRvalue,x1,y1,z1);

    //THIS IS WHERE SENSOR CODE ENDS!!!
}