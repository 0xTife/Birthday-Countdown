var i = 0;
var txt = "My Birthday countdown 😎 ";

var speed = "140";

function typeH1() {
    if (i < txt.length) {
        document.getElementById("head").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeH1, speed);
    }
}

var countDownDate = new Date("July 14, 2020 12:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var time = countDownDate - now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));

    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;

    document.getElementById("hour").innerHTML = hours;

    document.getElementById("minute").innerHTML = minutes;

    document.getElementById("second").innerHTML = seconds;

    if (time < 0) {
        clearInterval(x);

        document.getElementById("day").innerHTML = '0';

        document.getElementById("hour").innerHTML = '0';

        document.getElementById("minute").innerHTML = '0';

        document.getElementById("second").innerHTML = '0';

        document.getElementById("head").style.display = "none";
        document.getElementById("countdown").style.display = "none";

        document.getElementById("msg").style.display = "block";

        document.getElementById("image").style.backgroundImage = 'url("https://images.all-free-download.com/images/graphiclarge/happy_birthday_colorful_balloons_background_set_538074.jpg")';

        document.getElementById("image").style.backgroundRepeat = "no-repeat 50% 50%";

        document.getElementById("image").style.backgroundSize = "cover";

    }
}, 1000);