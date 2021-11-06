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

	getStyles: function() {
        return [
          "mmm-birds.css",
          "https://use.fontawesome.com/releases/v5.0.7/css/all.css"
        ];
    },

	getDom: function() {
    var button = document.CreatetElement("div");
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border: 0 none transparent";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
    iframe.src="http://kayla.manonx.com/birds.html";

		// <iframe width="480" height="270" src="http://www.ustream.tv/embed/17074538?html5ui" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>
    button.className = "bird";

    $(button).on("click", function(){
    return iframe;
    })
	},

});
