# Typing.js

`typing.js` is a javascript package that is designed to be a cool widget to use as an element on websites.

It allows the user to 'type' some ready-made content on the screen. For an example of it in action see [here](http://harrybeadle.github.io/typing-js).

## Usage

The script is fairly easy to implement. You need to have a containing `<div>` with id `typing-container`and inside that two `<span>`s, one with tag `#typing-text` that contains the HTML that you want the user to 'type' and another after that with a tag `#typing-cursor` that contains the curser you want to use, for example `|`. *After* all of this in the HTML you should put the `<script>` tag.

### Example HTML

    <div id="container">
    	<span id="typing-text">
    		This is the text you want to appear when you
    		start to type in the webpage. It dosn't matter what's
    		here and <b> tags </b> are  handeled well even if
    		there is <i>a space in</i> them.
    		<a href="#">This is a link</a>, for example.
    	</span><span id="typing-cursor">|</span>
    </div>
    	<script src="typing.js"></script>

## Credits

Deisgned, built and documented by [Harry Beadle](http://www.harrybeadle.co.uk)