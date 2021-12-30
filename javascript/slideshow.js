photoFrame = document.getElementById("photoframe");
imageHolder = document.getElementById("imageholder");
photoSelector = document.getElementById("slideselector");

//photos to display on main page slideshow.
const photo_path = "/images/frontpage_slideshow/";
images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"];

//Create selector dots for each photo
var listitems = "";
images.forEach(c => {
	listitems += "<li></li>\n";
});
photoSelector.innerHTML = listitems;
photoSelector.childNodes[0].classList.add("selectedPhoto");

//Update selected photo every timeout interval.
selectionHandles = document.querySelectorAll("#slideselector > li");

//Define onClick functions to run with an ID corresponding to which li was clicked.
var i = 0;
Array.from(selectionHandles).forEach(li => {
	const id = i++ % selectionHandles.length
	li.onclick = () => handleUserClicksPhotoSelector(id)
})


//Create idx variable whose state is shared by handleUserClicksPhotoSelector and photoChangingLoop functions
//Tracks which photo is shown in the slideshow.
var idx = 0;

//On-click function to handle when user clicks a photo selector
function handleUserClicksPhotoSelector(num) {
	photoSelector.childNodes[2 * idx].classList.remove("selectedPhoto");
	idx = num
	imageHolder.childNodes[1].src = photo_path + images[idx];
	photoSelector.childNodes[2 * idx].classList.add("selectedPhoto");
}

//Loop which runs continuously, updates the slideshow after waiting a set timeout.
var photoChangingLoop = () => {
	setTimeout(() => {
		photoSelector.childNodes[2 * idx].classList.remove("selectedPhoto");
		idx = ++idx % images.length;
		imageHolder.childNodes[1].src = photo_path + images[idx];
		photoSelector.childNodes[2 * idx].classList.add("selectedPhoto");
		photoChangingLoop();
	}, 5000);
}

photoChangingLoop();