
class Mobile {
 
     constructor(brand, ram, batteryStatus, song, isCallInProgress){
         this.brand = brand;
         this.ram = ram;
         this.batteryStatus = batteryStatus;
         this.song = song;
         this.isCallInProgress = isCallInProgress;
     }
     
     playMusic(){
         console.log(`Playing ${this.song} Song`);
     }
     
     stopMusic(){
         console.log("Music Stopped");
     }
     
     fullCharge(){
         if(this.batteryStatus < 100){
             this.batteryStatus = 100;
             console.log("Mobile Fully Charged");
         }else{
             console.log("Mobile Already Fully Charged");
         }
     }
     
     makeCall(){
         this.isCallInProgress = true;
         console.log("Calling...");
     }
     
     endCall(){
         if(this.isCallInProgress){
             console.log("Call Ended");
             this.isCallInProgress = false;
         }
         else{
              console.log("No Ongoing Call to End");
         }
  
     }
  
  }
  
  
  function main() {
    const brand = readLine();
    const ram = readLine();
    const batteryStatus = parseInt(readLine());
    const song = readLine();
    const isCallInProgress = JSON.parse(readLine());
  
    
    const myMobile = new Mobile(brand, ram, batteryStatus, song, isCallInProgress);
  
    
    myMobile.fullCharge();
    
    myMobile.playMusic();
    myMobile.stopMusic();
    
    myMobile.endCall();
    myMobile.makeCall();
    myMobile.endCall();
  }


  main();