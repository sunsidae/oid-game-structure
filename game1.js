var main = {
  
  init: (function(){
      productMode = 0;

  })(),
  
  waitforinput: function() {
    var oid;
      var clickcnt = 0;
			while (oid != 0) {
				oid = prompt("ENTER OID");
				input = parseInt(oid);					// please replace with your waitforinput function
        clickcnt++;
        
        main.checkMode();        
          if (productMode == 1){
            main.discoveryMode();
          }
     }
	},
  
   playSound: function(sound){
     console.log(input+": "+sound); 					// please replace with your playsound function		
  },
  
  checkMode: function() { 
    if (input == 10200){
      productMode = 1 // discovery
      main.playSound("Discovery Ding Ding Sound"); 
    }
    else if (input == 10201){
      productMode = 2 // knowledge
    }
    else if (input == 10202){
      productMode = 3 // story
    }
    else if (input == 10203 || input == 9001){
      productMode = 4 // game mode
    }
    else {
      main.discoveryMode();
    }
  },
  
  updateMode: function(){
  // if mode changes when I already have chosen a mode
  
  },
   
  discoveryMode: function(){
    var oidArray = [       
      4444,"Das ist eine Lampe", 
      5555,"Das ist ein Stuhl"  
    ];
         
    for (i=0;i<oidArray.length;i++){      
      if (input == oidArray[i]){
          var sound = i+1;
          main.playSound(oidArray[sound]);				
      }
    }
  },
};

main.waitforinput();