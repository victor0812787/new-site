// start img cart
let Random = document.getElementById('first-img-button').Value;
let Download = document.getElementById('second-img-button').Value;
// end img cart

// start first button
let Hair = document.getElementById('button-one').Value;
let ears = document.getElementById('button-two').Value;
let eyes = document.getElementById('button-three').Value;
let mouth = document.getElementById('button-four').Value;
let neck = document.getElementById('button-five').Value;
let leg = document.getElementById('button-six').Value;
let accessories = document.getElementById('button-seven').Value;
let background = document.getElementById('button-eight').Value;
// end first button

// start second button 
let nine = document.getElementById('nine-button').Value;
let curls = document.getElementById('ten-button').Value;
let short = document.getElementById('eleven-button').Value;
let bang = document.getElementById('twelve-button').Value;
let elegant = document.getElementById('pick-button').Value;
let quiff = document.getElementById('fourteen-button').Value;
// end second button

// starting hair
function h(Hair) {
    let hair = 'style';
    hair = [nine, curls, short, bang, elegant, quiff]
    function nine(){
        nine = [curls, short, bang, elegant, quiff]
        if (nine === '') {
            return  nine = fetch(hair, [1, 2, 3, 4, 5]) 
        };
    };
};
console.log(h);

