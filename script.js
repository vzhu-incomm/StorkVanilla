
function loadAnimation() {

    timer();
}


function timer() {

    disp();

    my_time = setTimeout('timer()', 1);
}

function disp() {
    var x = document.getElementById('stork1').style.left;
    xnum = x.slice(0, -2);
    xnum = parseFloat(xnum);
    document.getElementById('stork1').style.left = xnum + 0.05 + "vw";

    var y = document.getElementById('stork1').style.top;
    ynum = y.slice(0, -2);
    ynum = parseFloat(ynum);
    document.getElementById('stork1').style.top = ynum - 0.05 + "vh";

}