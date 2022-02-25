function loadAnimation() {

    timer();
}


function timer() {

    disp();

    my_time = setTimeout('timer()', 1);
}

function disp() {

    for (let i = 1; i <= 10; i++) {
        storknum = 'stork' + i;
        var x = document.getElementById(storknum).style.left;
        xnum = x.slice(0, -2);
        xnum = parseFloat(xnum);
        document.getElementById(storknum).style.left = xnum + 0.025 + "vw";

        var y = document.getElementById(storknum).style.top;
        ynum = y.slice(0, -2);
        ynum = parseFloat(ynum);
        document.getElementById(storknum).style.top = ynum - 0.025 + "vh";


        rect = document.getElementById(storknum).getBoundingClientRect();
        box = document.getElementById('border').getBoundingClientRect();

        if (rect.x > box.right || rect.bottom < box.y) {

            switch (i) {
                case 1:
                    // console.log(document.getElementById(storknum).style.left);
                    // console.log(document.getElementById(storknum).style.top);
                    document.getElementById(storknum).style.left = "-15vw";
                    document.getElementById(storknum).style.top = "62vh";
                    break;
                case 2:
                    // console.log(document.getElementById(storknum).style.left);
                    // console.log(document.getElementById(storknum).style.top);
                    document.getElementById(storknum).style.left = "-20vw";
                    document.getElementById(storknum).style.top = "72vh";
                    break;
                case 3:
                    document.getElementById(storknum).style.left = "-5vw";
                    document.getElementById(storknum).style.top = "62vh";
                    break;
                case 4:
                    document.getElementById(storknum).style.left = "-32vw";
                    document.getElementById(storknum).style.top = "32vh";
                    break;
                case 5:
                    document.getElementById(storknum).style.left = "-35vw";
                    document.getElementById(storknum).style.top = "40vh";
                    console.log(document.getElementById("stork5").src);
                    if (document.getElementById("stork5").src == "http://127.0.0.1:5500/img/stork-baby1.png") {
                        document.getElementById("stork5").src = "http://127.0.0.1:5500/img/stork-text1.png";
                        document.getElementById("stork5").style.width = "25vw";

                        document.getElementById("text").style.left = "-8.5vw";
                        document.getElementById("text").style.top = "-8vh";
                        document.getElementById("text").style.display = "block";
                        document.getElementById("text").innerText = document.getElementById("inputOne").value;
                    } else 
                    if (document.getElementById("stork5").src == "http://127.0.0.1:5500/img/stork-text1.png") {
                        document.getElementById("stork5").src = "http://127.0.0.1:5500/img/stork-text2.png";
                        //document.getElementById("stork5").style.width = "25vw";

                        document.getElementById("text").style.left = "-4.5vw";
                        document.getElementById("text").style.top = "-4vh";
                        document.getElementById("text").style.display = "block";
                        document.getElementById("text").innerText = document.getElementById("inputTwo").value;
                    }

                   
                    break;
                case 6:
                    document.getElementById(storknum).style.left = "-40vw";
                    document.getElementById(storknum).style.top = "50vh";
                    break;
                // case 7:
                //     document.getElementById(storknum).style.left = "15vw";
                //     document.getElementById(storknum).style.top = "35vh";
                //     break;
                case 8:
                    document.getElementById(storknum).style.left = "-45vw";
                    document.getElementById(storknum).style.top = "-5vh";
                    break;
                case 9:
                    document.getElementById(storknum).style.left = "-55vw";
                    document.getElementById(storknum).style.top = "15vh";
                    break;
                case 10:
                    document.getElementById(storknum).style.left = "-14vw";
                    document.getElementById(storknum).style.top = "21vh";
                    break;

            }

        }

    }

    var x = document.getElementById("text").style.left;
    xnum = x.slice(0, -2);
    xnum = parseFloat(xnum);
    document.getElementById("text").style.left = xnum + 0.025 + "vw";

    var y = document.getElementById("text").style.top;
    ynum = y.slice(0, -2);
    ynum = parseFloat(ynum);
    document.getElementById("text").style.top = ynum - 0.025 + "vh";

}
