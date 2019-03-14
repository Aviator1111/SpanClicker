document.addEventListener('DOMContentLoaded',function(){
    var spanClickButton = document.getElementById('scanPage');
    spanClickButton.addEventListener('click',function(){
        sendMessage({"message":"span_check"});
    },false);

    var resetSpanButton = document.getElementById('resetPage');
    resetSpanButton.addEventListener('click',function(){
        sendMessage({"message":"reset_span"});
    },false);


},false);

function sendMessage(messageObj){
    //send message to active tab
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id,messageObj); //Message handling between content.js and popup.js
        console.log("message sent");
    });
}
