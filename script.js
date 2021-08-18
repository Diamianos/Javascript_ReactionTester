function main() {

    makeBoxAppear();

    var currentDate = new Date().getTime();

    document.getElementById("shape").onclick = function() {

        document.getElementById("timer").innerHTML = "Your time: ";

        var delayDate = new Date().getTime();

        document.getElementById("timer").innerHTML = document.getElementById("timer").innerHTML + (delayDate - currentDate) / 1000 + "s";

        document.getElementById("shape").style.display = "none";

        setTimeout(main, Math.random() * 2000);
        
    } // end of onclick

} // End of main function

function makeBoxAppear() {

    document.getElementById("shape").style.display = "block";

    document.getElementById("shape").style.left = Math.floor((Math.random() * 1500) +1) + "px";

    document.getElementById("shape").style.top = Math.floor((Math.random() * 500) +1) + "px";

    var boxSize = getRandomInt(100, 225)

    document.getElementById("shape").style.width = boxSize + "px";

    document.getElementById("shape").style.height = boxSize + "px";

        document.getElementById("shape").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    var isCircle = getRandomInt(1, 3);

    if (isCircle == 1) {

        document.getElementById("shape").style.borderRadius = "50%";

    } // end of if

    else {

        document.getElementById("shape").style.borderRadius = "0%";

    } // end of else

}
// End of makeBoxAppear function

function getRandomInt(min, max) { // Inclusive of min exclusive of max

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); 

} // end of getRandomInt function


main();