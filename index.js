photoFrame = document.getElementById("photoframe");
imageHolder = document.getElementById("imageholder");
photoSelector = document.getElementById("slideselector");

//photos to display on main page slideshow.
const photo_path = "/images/frontpage_slideshow/";
images = ["photo1.jpeg", "photo2.jpg", "photo3.jpeg", "photo4.jpg"];

//Create selector dots for each photo
var listitems = "";
images.forEach(c => {
	listitems += "<li></li>\n";
});
photoSelector.innerHTML = listitems;
photoSelector.childNodes[0].classList.add("selectedPhoto");

var idx = 0;
var photo_changing_loop = () => {
	setTimeout(() => {
		photoSelector.childNodes[2 * idx].classList.remove("selectedPhoto");
		idx = ++idx % images.length;
		imageHolder.childNodes[1].src = photo_path + images[idx];
		photoSelector.childNodes[2 * idx].classList.add("selectedPhoto");
		photo_changing_loop();
	}, 5000);
}

photo_changing_loop();