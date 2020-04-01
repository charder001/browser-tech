# Browser-technologies @cmda-minor-web · 2019-2020 - ShirtMaker

## Assignment 1.2 - Fork your OBA
Tested the accesibility from my code for the OBA project 1, which can be found here https://github.com/charder001/project-1-1920

###
Tested
* Searching multiple books
* Removing books
* Entering detail page

### iPod Touch

IOS 6.1.6. Safari 8536.25
Background is slow
Crashes after a few seconds

### Nexus 5

Android 6.0.1
Chrome 75
Slow performer but it works fully

### Apple iPad MF432NF/A iOS9.3.5

Safari 9.0
Search function does not work (fetch)
Everything else seems to work

### Screen reader
When using the website with windows built in screen reader, it becomes evident that the website is not optimized for such accessibility tools. Images don't have alt text, links don't have names. Tab navigation doesn't work either.

### Fix
Images need alt text, links need to have meaningful names. Navigation with tabs should be possible by making the HTML more semantic.

## Assignment 2 - Introducion to ShirtMaker
![image](https://user-images.githubusercontent.com/43436118/78107212-52b50c00-73f5-11ea-949d-7dac2098eabf.png)
This app allows the user to create custom shirts by changing colors and adding text. The app has been designed to feature different layers of usability, functional - useable and pleasureable. I interpreted this as, the core functionality has to work with pure HTML, the usability comes from adding styling and flair with CSS and the pleasureability comes from enhancement using client side JavaScript.

## Installation
1. Open your terminal
2. Change directory to where you want to clone this repository, to the desktop for example

`cd desktop` 

3. Clone this repository

`git clone https://github.com/charder001/browser-tech`

4. Change direction into the newly created file

`cd browser-tech`

5. Install dependencies

`npm install`

6. Run application

`npm run`

### Use Case
ShirtMaker is an application designed for the use case: I want to be able to design, print and save nerdy t-shirts and be able to pick up where i left off after i leave the site.

### Sketches
Sketches where the user can edit colors, text, save and print their shirt.
![evensmaller](https://user-images.githubusercontent.com/43436118/78107491-d838bc00-73f5-11ea-92ac-27bdf4f0e3b6.jpg)

### How i devided my layers
* Functional layer contains all the core functionality of the app using Server side Rendering and HTML, this means the most important features of this application are available to the user without JavaScript or CSS.
* Usable layer is enhanced by adding styling using CSS. This makes the user experience better by allowing for a clearer visual hierarchy, more affordance and a more aesthetically pleasing look.
* The pleasureable layer adds things like live updating of the added text when typing and the abillity to print the shirt/webpage.

### Testing - browsers, accessibility and layers
The functional layer - What my app looks like when JavaScript and CSS are disabled.
As you can see, the user still has the abillity to create custom shirts by adding text and changing colors. The user also still receives their custom shirt link which they can use to pick up where they left off after they close their browser.
![testnojscss](https://user-images.githubusercontent.com/43436118/78108931-93625480-73f8-11ea-9767-92e63b724909.PNG)


The usable layer - when css is enabled, but JavaScript isn't.
Here, the user gets to see a more complete website. The useability is improved by better visual hierarchy, more affordance and a more pleasing look.
![testnojs](https://user-images.githubusercontent.com/43436118/78109199-171c4100-73f9-11ea-8367-63f52c97dac4.PNG)

The pleasureable layer - when everything is turned on.
Adding JavaScript to the site allows live reloading of added text to the shirt and the printing of the website.
![testEverything](https://user-images.githubusercontent.com/43436118/78109530-aaee0d00-73f9-11ea-8cad-8fddab3a26ad.PNG)


Throughout my testing, i used the contrast checker from https://webaim.org/resources/contrastchecker/ to see if my site conforms to standards. Although my first design did not pass, after some adjustment eveything is in the clear.

### Some fallbacks i have implemented
* CSS fallback fonts. to ensure the user always gets the best possible fonts
`font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;` 

* Gradients don't work well in some browsers, so a fallback color has been implemented
`	background: rgb(255,165,0);
	background: linear-gradient;
 `
 
* @support for flexbox to ensure a decent layout

 `@supports(display: flex) {
	main {
		display: flex;
		width: 90%;
		margin: 1em;
	}
}
`
`
main {
	float: left;
	margin-left: 2em;
}
`



<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
