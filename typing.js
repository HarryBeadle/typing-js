// typing.js
// by Harry Beadle
// http://www.harrybeadle.co.uk

// Load this script after #typing-text and #typing-cursor
// #typing-text is the span in which the content appears
// #typing-cursor is the span where the cursor will apear
// Inside #typing-cursor put the char you want as the cursor

// Find Elements
var content = document.getElementById("typing-text")
var cursor = document.getElementById("typing-cursor")

// Cusor Variables
var cursor_contents = cursor.innerHTML
var cursor_inactive = true
var cursor_visable = true

// Cursor Functions
function BlinkCursor() {
	if (cursor_inactive && cursor_visable) {
		cursor.innerHTML = cursor_contents
		cursor_inactive = false
	} else {
		cursor.innerHTML = ""
		cursor_inactive = true
	}
}
window.setInterval(BlinkCursor, 1000)

// Text Setup
var list = content.innerHTML.split(" ")
var string = ">"
content.innerHTML = string

// Text Functions
function typingshownext() {
	var next = list.shift()
	if (next != undefined) {
		string += " " + next
		content.innerHTML = string
	} else {
		setTimeout(function() {
			cursor_visable = false
		}, 5000)
		function typingshownext() {}
	}
}
function typingshowall() {
	while (list.length > 0) {
		shownext()
	}
}
window.onkeypress = typingshownext
document.getElementById("typing-container").onclick = typingshownext