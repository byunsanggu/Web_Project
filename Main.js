//시간 
var Time = 3601;  
var Min = ""; 
var Sec = ""; 

var x = setInterval(function(){ 
    Min = parseInt(Time/60);  
    Sec = Time % 60;  

    document.getElementsByClassName("btn")[0].innerHTML = Min + "분" + Sec + "초";  
    Time--; 

    if(Time < 0) {
        clearInterval(x);
    }


}, 1000); 

document.getElementById('btn_date').value = new Date().toISOString().substring(0, 10);; // 날짜  


