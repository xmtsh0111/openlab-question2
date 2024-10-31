var night=document.getElementById("night");
var ok=document.getElementById("ok");
var text = document.getElementById("text");


//搜集输入的倍速消息并将消息发送到信息接收端
   document.getElementById("ok").addEventListener("click", function() {
       var speedValue = parseFloat(text.value);
       if (!isNaN(speedValue)) {
           chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
               chrome.tabs.sendMessage(tabs[0].id, {action: "setSpeed", speed: speedValue});
           });
       }
   });
var isNightMode=false;
	document.getElementById("night").addEventListener("click",function(){
		if(isNightMode){
			chrome.tabs.query({active:true,currentWindow:true},function(tabs){
			chrome.tabs.sendMessage(tabs[0].id,{action:"day"});	
			});
		night.innerHTML="night";
		isNightMode=false;	
		}	
	
		else{	
			chrome.tabs.query({active:true,currentWindow:true},function(tabs){
			chrome.tabs.sendMessage(tabs[0].id,{action:"night"});
			});
			night.innerHTML="day";
			isNightMode=true;
		}
});	
