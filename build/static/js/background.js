chrome.commands.onCommand.addListener(function (command) {
  if (command === "initiate-modular-search") {
    console.log('initiated');

    chrome.tabs.insertCSS({file: "./css/show-module.css"});

  }
});
//todo bookmark links from a website. maybe pull them up when user goes to bottom right corner