//接受消息发送端发送的消息，并搜索视频元素，将发送的倍速消息应用于视频的倍速播放中
document.addEventListener('DOMContentLoaded', function () {
   chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	   if (message.action === 'setSpeed') {
		   var videoElements = document.getElementsByTagName('video');
		   if (videoElements.length > 0) {
			   var video = videoElements[0];
			   video.playbackRate = message.speed;
			   var videospeed=parseFloat(message.speed);
			   //使插件输入的倍速选项插入到b站倍速选择框中
			   var speedSelect = document.getElementsByClassName('bpx-player-ctrl-playbackrate-menu')[0];
			   var newOption = document.createElement('li');
			   newOption.setAttribute("data-value", videospeed);
			   newOption.textContent = videospeed + 'x';
			   newOption.className="bpx-player-ctrl-playbackrate-menu-item ";
			   speedSelect.appendChild(newOption);
			}
		}
	   var style=document.createElement("style");
	   if(message.action==="night"){
			style.textContent="p{color:white;  background-color:black;}";
			style.textContent="a{color:white;    background-color:black;}";
			style.textContent="span{color:white;   background-color:black;}";
			style.textContent="div{color:white;   background-color:black;}";
			document.head.appendChild(style);
		   document.querySelector("#biliMainHeader > div > div").setAttribute("style", "background-color:black;");
		   document.querySelector("#danmukuBox > div > div > div > div > div > div > div.bui-collapse-header").setAttribute("style", "background-color:black;");
           document.querySelector("#nav-searchform").setAttribute("style", "background-color:black;");
		   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div.up-panel-container > div.up-info-container > div.up-info--right > div.up-info__detail > div > div.up-detail-top > a.up-name").setAttribute("style","color:white");
		   document.querySelector("#viewbox_report > div.video-info-title > div > h1").setAttribute("style","color:white");
		   document.querySelector("#v_desc > div.basic-desc-info").setAttribute("style","color:white");
		   
		   for(var i = 1;i <= 7;i++){
				var add = "";
				if(i == 1)	add = "> div ";
				document.querySelector("#biliMainHeader > div > div > ul.left-entry > li:nth-child(" + i.toString() + ") > a " + add + "> span").setAttribute("style", "color:white;");
			}
		   
		   try{
			   for(var j=1;;j++){
			document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.recommend-list-v1 > div.rec-list > div:nth-child(" + j.toString() +") > div > div.info > a > p").setAttribute("style", "color:white;");		
			}
		   }
		   catch(error){
			   
		   }
			
		   try{
			   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.video-pod.video-pod").setAttribute("style", "background-color:black;");
			   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.video-pod.video-pod > div.video-pod__header > div.header-top > div.left > a").setAttribute("style","color:white");
			   
		   }
		   catch(error){
			   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.recommend-list-v1 > div.next-play > div.rec-title > div.title-txt").setAttribute("style","color:white");
			   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.recommend-list-v1 > div.next-play > div.video-page-card-small > div > div.info > a > p").setAttribute("style","color:white");
		   }
		      try{
			   
		   }
		   catch(error){
			   
		   }
	   }
	   
	   
	   
	   
	   
	   
	   
	   
	   if(message.action==="day"){
			style.textContent="p{color:black;  background-color:white;}";
			style.textContent="a{color:black;    background-color:white;}";
			style.textContent="span{color:black;   background-color:white;}";
			style.textContent="div{color:black;   background-color:white;}";
			document.head.appendChild(style);
		   document.querySelector("#biliMainHeader > div > div").setAttribute("style", "background-color:white;");
		   document.querySelector("#danmukuBox > div > div > div > div > div > div > div.bui-collapse-header").setAttribute("style", "background-color:white;");
		   document.querySelector("#nav-searchform").setAttribute("style", "background-color:white;");
		   document.querySelector("#viewbox_report > div.video-info-title > div > h1").setAttribute("style","color:black");
		   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div.up-panel-container > div.up-info-container > div.up-info--right > div.up-info__detail > div > div.up-detail-top > a.up-name").setAttribute("style","color:black");
		   document.querySelector("#v_desc > div.basic-desc-info").setAttribute("style","color:black");
		   
		   for(var i = 1;i <= 7;i++){
				var add = "";
				if(i == 1)	add = "> div ";
				console.log("#biliMainHeader > div > div > ul.left-entry > li:nth-child(" + i.toString() + ") > a " + add + "> span");
				document.querySelector("#biliMainHeader > div > div > ul.left-entry > li:nth-child(" + i.toString() + ") > a " + add + "> span").setAttribute("style", "color:black;");

			}
		   try{
			   for(var j=1;j<=40;j++){
			document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.recommend-list-v1 > div.rec-list > div:nth-child(" + j.toString() +") > div > div.info > a > p").setAttribute("style", "color:black;");		
			}
		   }
		   catch(error){
		   }
		   	
		   try{
		   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.video-pod.video-pod > div.video-pod__header > div.header-top > div.left > a").setAttribute("style","color:black");
		   document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.video-pod.video-pod").setAttribute("style", "background-color:white;");

		   }
		   catch(error){
			   
		   } 
		   try{
		   		document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.recommend-list-v1 > div.next-play > div.rec-title > div.title-txt").setAttribute("style","color:black");
		   		document.querySelector("#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(7) > div.recommend-list-v1 > div.next-play > div.video-page-card-small > div > div.info > a > p").setAttribute("style","color:black");
		   }
		   catch(error){
			   
		   } 

	   }
   });
});




