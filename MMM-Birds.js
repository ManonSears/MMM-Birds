/* global Module */

/* Magic Mirror
 * Module: MM Hide All
 *
 * By EoF https://forum.magicmirror.builders/user/eof
 * MIT Licensed.
 */

Module.register("MMM-Birds",{

  defaults: {
    animationSpeed: "0",
    updateInterval: 60 * 60 * 1000,
},

  start: function () {
  self = this;

  setInterval(function() {
  self.updateDom(self.config.animationSpeed || 0);
  }, this.config.updateInterval);

  document.getElementByClassName('paint-it-black').src = document.getElementsByClassName('paint-it-black').src

},

	getScripts: function() {
		return ["modules/MMM-Birds/js/jquery.js"];
	},

	getStyles: function() {
		return ["mmm-birds.css"];
	},
	
	getDom: function() {
		var wrapper = document.createElement("div");
		var button = document.createElement("div");
		var text = document.createElement("span");
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border: 0 none transparent";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
		iframe.src="http://kayla.manonx.com/birds.html";
		var hidden = true;
		
		iframe.className = "paint-it-black";
		
		button.className = "hide-toggle";
		button.appendChild(text);
		text.innerHTML = "Fly";
		
		wrapper.appendChild(button);
		wrapper.appendChild(iframe);

		
		
		$(button).on("click", function(){
			
			if(hidden){
				
				$(iframe).fadeIn(200);
				$(button).fadeTo(1000, 0.3);
				$(text).html('Hide');
				hidden = false;
			}else{
				$(iframe).fadeOut(200);
				$(button).fadeTo(1000, 1);
				$(text).html('Fly');
				hidden = true;
			}
		});
		
		return wrapper;
	}
});
