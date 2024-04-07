// JavaScript function to change the text
function changeText() {
    // Array of different texts to display
    const texts = ["Thailand had the world's longest-reigning monarch!", 
	"Thailand is the only Southeast Asian country that was never colonised by a European power!", 
    "Bangkok in Thailand was once known as the Venice of the East!",
	"Yellowstone is home to more than 500 active geysers!",
	"Yellowstone is an active SUPERVOLCANO!",
	"Yellowstone encompasses 3,472 square miles (2,221,766 acres) which makes it larger than Rhode Island and Delaware combined!",
	"Costa Rica is a farming nation!",
	"Costa Rica doesn't have a military!",
	"Costa Rica is one of the happiest countries in the world."
	];
  
    // Get the displayText element
    const displayTextElement = document.getElementById("funText");
  
    // Get a random index from the texts array
    const randomIndex = Math.floor(Math.random() * texts.length);
  
    // Update the text content with the randomly selected text
    displayTextElement.textContent = texts[randomIndex];
  }