/*dont need to check if document is loaded, by default, chrome
injects content scripts after DOM is loaded*/ 
/* leaving console.log statements in, made life easier for me to debug issues
and therefore not using strict mode */



var elementsObject = {};
//function to load span elements into elementsObject 
function getSpanElements(){
    var spanElements = document.getElementsByTagName("span");
    console.log("grab all span elements");
    elementsObject["spanElements"] = spanElements;
}

//function to add clickable property of span elements
function addSpanClicks(spanElements){
    console.log("change span element background color");
    console.log("attaching event listeners");  

    for(var i= spanElements.length-1;i>=0;i--){
        var spanElement = spanElements[i];
        var spanText = spanElement.innerText || spanElement.textContent;
        if(spanText.trim() !== ""){
            spanElement.style.backgroundColor = "rgba(34,139,34,0.5)";
            spanElement.style.cursor = "pointer";
            spanElement.addEventListener("click", onSpanClick); 
        }
    }
}
//function that describes what to do when span is clicked
function onSpanClick(event){
    event.preventDefault(); //prevent default browser action
    this.style.backgroundColor = "rgba(128,0,128,0.5)";
    event.stopPropagation();
    alert("Made Span Clickable!!!");
}
//function to remove clickable property of span elements
function removeSpanClicks(spanElements){
    console.log("change span element background color");
    console.log("removing event listeners");  

    for(var i= spanElements.length-1;i>=0;i--){
        var spanElement = spanElements[i];
        var spanText = spanElement.innerText || spanElement.textContent;
        if(spanText.trim() !== ""){
            spanElement.style.backgroundColor = "initial";
            spanElement.style.cursor = "initial";
            spanElement.removeEventListener("click", onSpanClick);
        } 
    }
}

//Message handling between background.js and content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message === "span_check"){
            if(!(elementsObject.spanElements && elementsObject.spanElements.length > 0)){ //check if already exists, if so do not load again
                console.log("load span elements"); 
                getSpanElements();
                console.log("add click event listeners");
                addSpanClicks(elementsObject.spanElements);
            }
            
        }
        if(request.message === "reset_span"){
            if(elementsObject.spanElements && elementsObject.spanElements.length > 0){
                console.log("remove click event listeners");
                removeSpanClicks(elementsObject.spanElements);
                console.log("remove saved span elements from memory");
                delete elementsObject.spanElements;
            }
            
        }
   }
);