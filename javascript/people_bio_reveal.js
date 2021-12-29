//Add the click handling function to each person 
people = document.getElementsByClassName("person")
Array.from(people).forEach(p => {
	p.onclick = () => handleClickedOnPerson(p);
})

popup = document.getElementById("bio-popup")
function handleClickedOnPerson(p) {
	//Grab the hidden bio text from the person.
	bio_text = p.childNodes[5].innerText;
	p.id = "selected"

	//
	popup.childNodes[1].innerText = bio_text
	popup.style.display = "flex"

	p.id = ""
} 