/*dont need to check if document is loaded, by default, chrome
injects content scripts after DOM is loaded*/ 

function getSpanElements(){
    var spanElements = document.getElementsByTagName("span");
    console.log("grab all span elements");
    return spanElements;
}


function addSpanClicks(spanElements){
    console.log("change span element background color");
    console.log("attaching event listeners");  

    for(var i= spanElements.length-1;i>=0;i--){
        var spanElement = spanElements[i];
        spanElement.style.backgroundColor = "rgba(34,139,34,0.3)";
        spanElement.style.cursor = "pointer";
        spanElement.addEventListener("click", function(e){
            e.preventDefault();
            this.style.backgroundColor = "rgba(128,0,128,0.3)";
            e.stopPropagation();
            alert("Made Span Clickable!!!");
        }); 
    }
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message === "clicked_icon"){
            console.log("extension icon clicked");
            var currentSpanElements = getSpanElements();
            addSpanClicks(currentSpanElements);
        }
    }
);