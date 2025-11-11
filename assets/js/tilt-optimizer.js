// this code must be attatched to all scenes using tilt.js. It only allows the 3d effect to take place when the mouse is hovering over the tilt enabled cards.

var cards = document.querySelectorAll('.card[data-tilt]')

function enable_3d(idx) {
    cards[idx].style.transformStyle = 'preserve-3d';
};
function disable_3d(idx) {
    cards[idx].style.transformStyle = 'flat';
};

// only when mouse enters a tilt enabled card is the 3d rendering enabled
for (let i=0; i < cards.length; i+=1) {
    // `let` instead of `var` must be used so the the variables closure works in the passing of the function.
    cards[i].addEventListener('mouseenter', () => enable_3d(i))
    cards[i].addEventListener('mouseleave', () => disable_3d(i))
};
