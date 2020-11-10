/* global document */
var up = document.getElementById('up'),
    down = document.getElementById('down'),
    cir = document.getElementById('cir'),
    sp = document.querySelectorAll('.sp'),
    roll = document.getElementById('roll'),
    rollarr = ['Processor', 'Camera', 'Speed', 'Quality'],
    deg = 0,
    index = 0,
    active = 0;
down.addEventListener('click', function () {
   'use strict';
    deg = deg + 90;
    cir.style.transform = 'rotate(' + deg + 'deg)';
    if ( active == 0) {
                active = 4;
    }
    active = active - 1;
    if (index == 0)
{
    index = 3;
} else {
    index = index - 1;
}
    roll.innerHTML = rollarr[index];
});
up.addEventListener('click', function () {
   'use strict';
    deg = deg - 90;
    cir.style.transform = 'rotate(' + deg + 'deg)';
    if (active === 3) {
                active = -1;
    }
    active = active + 1;   
    if (index == 3) {
        index = 0;
    } else {
        index = index + 1;
    }
    roll.innerHTML = rollarr[index];
});
sp[2].style.marginLeft = 350 - sp[2].innerHTML.length + 'px';
sp[4].style.marginLeft = 350 - sp[4].innerHTML.length + 'px';