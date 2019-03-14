# SpanClicker
Chrome extension that looks for some span element in a page and makes it clickable. The click activates a popup i.e. alert on the page that displays "Made Span clickable".

Instructions to load the extension:
-Download the Span Clickable extension folder from GitHub.
-To load "Span Clickable" extension in Chrome, open up chrome://extensions/ in your browser and click “Developer mode” in the top right.
-Now click “Load unpacked extension” and select the extension’s directory. Extension should be added to the list.

Basic functionality:
--User can make non empty span elements on the page clickable ("Make Span clickable" button). All non empty span elements are highlighted.
--User can reset the page to its initial state (before making span elements clickable). ("Reset Span Clickable" button)
--Clicking on a clickable span element displays a popup alert saying "Made span clickable!!!"

Known Limitation: 
--if span elements have any associated clicks that trigger browser actions (like opening a new tab or reloading a page), such actions are prevented in span clickable mode.
--Does not make empty span elements clickable or highlight them.

Known Issues:
-- if a span element already has an background color property, extension does not highlight the span element, but makes it clickable.

Future Improvements:
-- Make the highlight more consistent with the use of wrappers over span elements
-- Currently attaching a click event listener to every non empty span element. We can improve efficiency by parsing the DOM tree and placing wrappers only where necessary.
-- We can enable or disable extension based on the page content. (only if span elements exist in the page)
-- Provide feedback for empty span elements or when no span elements exist in the page
