//Add the click handling function to each person 
people = document.getElementsByClassName("person")
Array.from(people).forEach(p => {
	p.onclick = () => handleClickedOnPerson(p);
})


popup = document.getElementById("bio-popup")
container = document.getElementById("container")
//function to display popup box containing person's bio when clicked.
function handleClickedOnPerson(p) {
	//Grab the hidden bio text from the person.
	bio_text = p.childNodes[7].innerText;

	//Set the hidden bio text of the selected element to be the text in the popup and show it
	popup.childNodes[1].innerText = bio_text
	popup.style.display = "flex"

	//Get an array of not selected people.
	p.id = "selected"
	siblings = Array.from(people).filter(person => person.id != "selected")

	//Hide the not selected people
	siblings.forEach(p => {
		p.classList.add("hidden")
	})

	//Center the selected headshot.
	container.style.alignItems = "center"

	//Add function which undoes the handleClickedOnPerson effects to the return button.
	returnBtn = document.getElementById("return-button")
	returnBtn.onclick = () => handleClickedReturn(p, siblings)

	//Show return button
	returnBtn.style.display = "flex"

}

//Function which undoes what is done in the person clicked function. 
function handleClickedReturn(p, siblings) {
	//Reset the popup box.
	popup.childNodes[1].innerText = ""
	popup.style.display = "none"

	//Unset person id from 'selected'.
	p.id = ""

	//Show hidden siblings.
	siblings.forEach(p => {
		p.classList.remove("hidden")
	})

	//Reset people container.
	container.style.alignItems = "flex-start"

	//hide return button
	returnBtn.style.display = "none"
}