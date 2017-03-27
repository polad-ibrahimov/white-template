var multiBtn = document.getElementById('multiBtn');

multiBtn.addEventListener('mouseover', function() {
    this.innerHTML = 'YES I WANT IT';
})

multiBtn.addEventListener('mouseout', function() {
    this.innerHTML = 'BUY THIS THEME';
})



//------------ home slider ------------------

var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');

var img = document.querySelector('.slider img');

var count = 0;
var images = ['img/slider/slide1_bg.jpg', 'img/slider/slide2_bg.jpg', 'img/slider/slide3_bg.jpg'];


img.setAttribute("src", images[0]);
rightBtn.addEventListener('click', function() {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }


    img.setAttribute("src", images[count]);
});

leftBtn.addEventListener("click", function() {

    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    img.setAttribute("src", images[count]);

});

// start Project section ------
var sliderRight = document.getElementById('btnright');
var sliderLeft = document.getElementById('btnleft');
var left = 0;

sliderRight.addEventListener('click', function() {
    var content = document.getElementById('content');
    left = left - 342;

    if (left < -1206) {
        left = 0;
    }
    content.style.left = left + 'px';

})

sliderLeft.addEventListener('click', function() {
    var content = document.getElementById('content');
    left = left - 342;

    if (left < -1206) {
        left = 0;
    }
    content.style.left = left + 'px';

})


// start Team section ------------------

var teamSliderRight = document.getElementById('teamBtnLeft');
var teamSliderLeft = document.getElementById('teamBtnRight');
var left1 = 0;

teamSliderRight.addEventListener('click', function() {
    var content1 = document.getElementById('info-img');
    left1 = left1 - 370;

    if (left1 < -1110) {
        left1 = 0;
    }
    content1.style.left1 = left1 + 'px';

})

teamSliderLeft.addEventListener('click', function() {
    var content1 = document.getElementById('info-img');
    left1 = left1 - 370;

    if (left1 < -1110) {
        left1 = 0;
    }
    content1.style.left = left1 + 'px';

})


//start clean code section -------

var cleanMain = document.getElementById('cleanMain');

document.getElementById('clean-tab').addEventListener('click', function(event) {

    var index = event.target.getAttribute('images') - 1;


    for (var i = 0; i < cleanMain.childElementCount; i++) {
        this.children[i].classList.remove('active');
        cleanMain.children[i].classList.remove('active');
    }

    this.children[index].classList.add('active');
    cleanMain.children[index].classList.add('active');
})



// start News section -------

var clients = document.getElementById('newsMain');

document.getElementById('project-btn').addEventListener('click', function(event) {

    var index = event.target.getAttribute('index') - 1;


    for (var i = 0; i < clients.childElementCount; i++) {
        this.children[i].classList.remove('active');
        clients.children[i].classList.remove('active');
    }

    this.children[index].classList.add('active');
    clients.children[index].classList.add('active');
})