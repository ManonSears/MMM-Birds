/* Magic Mirror
 * Module: MMM-EARTH-Live
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-Birds",{

	defaults: {
			height:"270px",
			width:"480px",
      animationSpeed: "0",
      updateInterval: 60 * 60 * 1000,
	},

    start: function () {
		self = this;

    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0);
    }, this.config.updateInterval);

  },
  
  getScripts: function() {
		return ["js/jquery.js"];
	},

	getStyles: function() {
        return ["css/mmm-birds.css"];
    },

	getDom: function() {
    var wrapper = document.createElement("div");
    var button = document.createElement("BUTTON");
    var iframe = document.createElement("IFRAME");
    button.classList.add("button");
    button.style = "border-radius: 1000px, border: 1 solid white";
    iframe.classList.add("iframe");
    iframe.style = "border: 0 none transparent";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
    iframe.src="http://kayla.manonx.com/birds.html";
		
		wrapper.appendChild(button);
		wrapper.appendChild(iframe);
		
	
      return iframe;


	}

});
