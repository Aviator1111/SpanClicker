
/*
chrome.runtime.onInstalled.addListener(function() {
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            css: ["span"]
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
*/

//not really needed as I am using browser action
// enabling or disabling extension based on the page content is not needed for now (time constraint) "probably future improvement"