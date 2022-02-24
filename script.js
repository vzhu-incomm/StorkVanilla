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
                    document.getElementById(storknum).style.left = "-27vw";
                    document.getElementById(storknum).style.top = "32vh";
                    break;
                case 5:
                    document.getElementById(storknum).style.left = "-35vw";
                    document.getElementById(storknum).style.top = "40vh";
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
                    document.getElementById(storknum).style.left = "-35vw";
                    document.getElementById(storknum).style.top = "-10vh";
                    break;
                case 9:
                    document.getElementById(storknum).style.left = "-55vw";
                    document.getElementById(storknum).style.top = "15vh";
                    break;
                case 10:
                    document.getElementById(storknum).style.left = "-18vw";
                    document.getElementById(storknum).style.top = "21vh";
                    break;

            }

        }

    }

}
