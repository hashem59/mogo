(function () {

	var accbtn = document.getElementsByClassName("accordion");

	var panel = document.getElementsByClassName("panel");

	for (var i = 0; i < accbtn.length; i++) {

		accbtn[i].addEventListener('click', toggleItem, false);

	}

	function toggleItem() {
		var itemClass = this.nextElementSibling.style.display;

		for (i = 0; i < panel.length; i++) {
			panel[i].style.display = 'none';
			accbtn[i].getElementsByTagName("i")[2].style.display = 'block';
			accbtn[i].getElementsByTagName("i")[1].style.display = 'none';

			if (panel[i].style.display === 'none') {
				this.nextElementSibling.style.display = 'block';
				this.getElementsByTagName("i")[1].style.display = 'block';
				this.getElementsByTagName("i")[2].style.display = 'none';
			}

		}

	}

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("quote-item");
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}


		slides[slideIndex - 1].style.display = "block";
	}

	var nexta =
		document.getElementsByClassName("next3")[0];


	nexta.addEventListener("click", function () {
		plusSlides(1);
	});

	var preva =
		document.getElementsByClassName("prev3")[0];

	preva.addEventListener("click", function () {
		plusSlides(-1);
	});

	var slider = document.getElementsByClassName("testim")[0];
	var sliderWidth = slider.offsetWidth;
	var slideList = document.getElementsByClassName("items")[0];
	var count = 1;
	var items = document.getElementsByClassName("testim-item").length;
	var prev = document.getElementsByClassName("prev21")[0];

	var next = document.getElementsByClassName("next21")[0];

	window.addEventListener('resize', function () {
		sliderWidth = slider.offsetWidth;
	});

	var prevSlide = function () {
		if (count > 1) {
			count = count - 2;
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		} else if (count === 1) {
			count = items - 1;
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		}
	};

	var nextSlide = function () {
		if (count < items) {
			slideList.style.left = "-" + count * sliderWidth + "px";
			count++;
		} else if (count === items) {
			slideList.style.left = "0px";
			count = 1;
		}
	};

	next.addEventListener("click", function () {
		nextSlide();
	});

	prev.addEventListener("click", function () {
		prevSlide();
	});


	setInterval(function () {
		nextSlide();
	}, 8000);





})();




