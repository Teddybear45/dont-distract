//injects module search bar after creating it
var moduleSearchBar = document.createElement("div");
// moduleSearchBar.className = "module-search-bar";
moduleSearchBar.id = "Z-module-search-bar"
document.body.appendChild(moduleSearchBar);

var moduleSearchBarContent = document.createElement("div");
moduleSearchBarContent.className = "module-search-bar-content";
moduleSearchBar.appendChild(moduleSearchBarContent);

// inject image into dom
var image = document.createElement("img");
image.src = chrome.runtime.getURL("../imgs/blank.png");
document.getElementsByTagName("body")[0].appendChild(image);




