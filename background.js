//the following function is called whenuser clicks on the browser extension action/icon
chrome.browserAction.onClicked.addListener(function(tab){
    //send message to active tab
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id,{"message":"clicked_icon"});
    });
});