


////////Include this librarys///////////

#include <FirebaseESP8266.h>
#include <ESP8266WiFi.h>


/////////////////Configurations for realtime databse from Firebase///////////
#define FIREBASE_HOST "Your firbase HOST"
#define FIREBASE_AUTH "Your firebase AUTH"
#define WIFI_SSID "Your WIFI name"
#define WIFI_PASSWORD "Your WIFI password"


//////Define a variable firebasedata for FirebaseData//////////////
FirebaseData firebaseData;


///Define your output//////
int Device_1 = 2;
///Output 2 is for ledboard for ESP8266////


/////////Void Setup/////////////

void setup() {
  
Serial.begin(9600);  

WiFi.begin(WIFI_SSID, WIFI_PASSWORD);  //WiFi will be connected


Firebase.begin(FIREBASE_HOST,FIREBASE_AUTH); //Firebase will be connected


pinMode(Device_1,OUTPUT); //Device_1 will be define how OUTPUT      

}




/////////Void Loop/////////////

void loop() {


Firebase.setFloat(firebaseData, "/Led1Status", 1); //Will be create a child on your realtime database

  
  if (Firebase.get(firebaseData,"/Led1Status")) {           ///////////////////////////////////////////////////////////////
                                                            ///////////////////////////////////////////////////////////////
          if (firebaseData.stringData()== "1"){  ///If      ///////////////////////////////////////////////////////////////
              digitalWrite(Device_1,LOW); //Device1 is ON   ///////////////////////////////////////////////////////////////
          }                                                 /////////// If value on firebase is "1" led is ON /////////////        
                                                            /////////// If value on firebase is "0" led is OFF ////////////
          else if (firebaseData.stringData() == "0"){       ///////////////////////////////////////////////////////////////  
              digitalWrite(Device_1,HIGH);//Device1 if OFF  ///////////////////////////////////////////////////////////////
            }}                                              ///////////////////////////////////////////////////////////////
 }                                                          ///////////////////////////////////////////////////////////////
  
