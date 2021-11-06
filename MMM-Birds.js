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
        return ["mmm-birds.css"];
    },

	getDom: function() {
    var button = document.CreatetElement("BUTTON");
		var iframe = document.createElement("IFRAME");
    iframe.classList.add("iframe");
    button.classList.add("button");
    
    iframe.style = "border: 0 none transparent";
    button.style = "border-radius: 1000px, border: 1 solid white";
    button.width = this.config.width;
    button.height = this.config.height;
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
    iframe.src="http://kayla.manonx.com/birds.html";

		// <iframe width="480" height="270" src="http://www.ustream.tv/embed/17074538?html5ui" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>
    document.body.appendChild(button);
    $(button).on("click", function(){
    return iframe;
    })
	},

});






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
        return ["mmm-birds.css"];
    },


  createContainerDiv: function () {
    const containerDiv = document.createElement("div");
    containerDiv.className = "st-container";

    return containerDiv;
  },

  toggleStandby: function () {
    const existingBodyClass = document.body.className;
    if (existingBodyClass === "st-standby show") {
      document.body.className = "st-standby fade";
    } else {
      document.body.className = "st-standby show";
    }
  },

  createStandByButtonDiv: function () {
    const standByButtonDiv = document.createElement("div");
    standByButtonDiv.className = "st-container__standby-button";

    standByButtonDiv.appendChild(document.createElement("span"))
    standByButtonDiv.addEventListener("click", () => this.toggleStandby());

    return standByButtonDiv;
  },

  toggleSideMenu: function () {
    const menuToggleDiv = document.getElementById("st-menu-toggle")
    menuToggleDiv.classList.toggle('show');

    const mainMenuDiv = document.getElementById("st-main-menu")
    mainMenuDiv.classList.toggle('show')
  },

  createMenuToggleButtonDiv: function () {
    const menuToggleButtonDiv = document.createElement("div");
    menuToggleButtonDiv.className = "st-container__menu-toggle";
    menuToggleButtonDiv.id = "st-menu-toggle";

    const hamburgerLineOne = document.createElement("div");
    hamburgerLineOne.className = "st-container__menu-toggle st-toggle__bar_one";

    const hamburgerLineTwo = document.createElement("div");
    hamburgerLineTwo.className = "st-toggle__bar_two";

    const hamburgerLineThree = document.createElement("div");
    hamburgerLineThree.className = "st-toggle__bar_three";

    menuToggleButtonDiv.appendChild(hamburgerLineOne);
    menuToggleButtonDiv.appendChild(hamburgerLineTwo);
    menuToggleButtonDiv.appendChild(hamburgerLineThree);

    menuToggleButtonDiv.addEventListener("click", () => this.toggleSideMenu());

    return menuToggleButtonDiv;
  },

  createShutdownButton: function () {
    const shutdownButtonItem = document.createElement("li");
    shutdownButtonItem.innerHTML = "<span class='fa fa-power-off fa-3x'></span>"
        + "<br>" +  this.translate('SHUTDOWN');
    shutdownButtonItem.className = "li-t"

    // Send shutdown notification when clicked
    shutdownButtonItem.addEventListener("click",
        () => this.sendSocketNotification("SHUTDOWN", {}));

    return shutdownButtonItem
  },


  createMainMenuDiv: function () {
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.className = "st-container__main-menu";
    mainMenuDiv.id = "st-main-menu";

    const shutdownButton = this.createShutdownButton();
    const restartButton = this.createRestartButton();

    const buttonList = document.createElement("ul");
    buttonList.appendChild(shutdownButton);

    mainMenuDiv.appendChild(buttonList);

    return mainMenuDiv;
  },

  getDom: function () {
    // Initial standby state
    document.body.className = "st-standby show";

    const container = this.createContainerDiv();

    const standByButton = this.createStandByButtonDiv();
    container.appendChild(standByButton);

    const menuToggleButton = this.createMenuToggleButtonDiv();
    container.appendChild(menuToggleButton);

    const mainMenu = this.createMainMenuDiv();
    document.body.appendChild(mainMenu);

    return container;
  },

});
