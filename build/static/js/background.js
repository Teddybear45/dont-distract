chrome.commands.onCommand.addListener(function (command) {
  if (command === "initiate-modular-search") {
    console.log('initiated');

    chrome.tabs.insertCSS({file: "./css/show-module.css"});

  }
});