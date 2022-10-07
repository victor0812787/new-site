// STARTING first button
let Hair = document.getElementById('button-one');
let ears = document.getElementById('button-two');
let eyes = document.getElementById('button-three');
let mouth = document.getElementById('button-four');
let neck = document.getElementById('button-five');
let leg = document.getElementById('button-six');
let accessories = document.getElementById('button-seven');
let background = document.getElementById('button-eight');
// ending first button

// start second button
let nine = document.getElementById('nine-button');
let curls = document.getElementById('ten-button');
let short = document.getElementById('eleven-button');
let bang = document.getElementById('twelve-button');
let elegant = document.getElementById('pick-button');
let quiff = document.getElementById('fourteen-button');
// end second button

// starting heir

// img part

// end img part
function h() {
    nine.innerHTML = 'Curly'
    curls.innerHTML = 'Thick'
    short.innerHTML = 'Long'
    bang.innerHTML = 'Short'
    elegant.innerHTML = 'Matte'
    quiff.innerHTML = 'straight'
    
    let list = document.getElementById("myDIV");
    list.classList.remove("d-none");
    bang.classList.remove("d-none");


    
    nine.addEventListener("click", function () {
        const img = document.querySelector("img"); 
        img.src = "./IMG/book1.jpg";
     
        document.getElementById('image')
            .style.display = "block";
    
        document.getElementById('nine')
         nine.style.display = "none";
    })

    curls.addEventListener("click", function () {
        const img = document.querySelector("img"); 
        img.src = "./IMG/book1.jpg";
     
        document.getElementById('image')
            .style.display = "block";
    
        document.getElementById('nine')
          curls.style.display = "none";
    })

    short.addEventListener("click", function () {
        const img = document.querySelector("img"); 
        img.src = "./IMG/book1.jpg";
     
        document.getElementById('image')
            .style.display = "block";
    
        document.getElementById('nine')
          short.style.display = "none";
    })

    bang.addEventListener("click", function () {
        const img = document.querySelector("img"); 
        img.src = "./IMG/book1.jpg";
     
        document.getElementById('image')
            .style.display = "block";
    
        document.getElementById('nine')
          bang.style.display = "none";
    })

    elegant.addEventListener("click", function () {
        const img = document.querySelector("img"); 
        img.src = "./IMG/book1.jpg";
     
        document.getElementById('image')
            .style.display = "block";
    
        document.getElementById('nine')
          elegant.style.display = "none";
    })

    quiff.addEventListener("click", function () {
        const img = document.querySelector("img"); 
        img.src = "./IMG/book1.jpg";
     
        document.getElementById('image')
            .style.display = "block";
    
        document.getElementById('nine')
          quiff.style.display = "none";
    })

}


// ending heir

function ER() {
    nine.innerHTML = 'Oblique'
    curls.innerHTML = 'Rectangular'
    short.innerHTML = 'Round'
    bang.innerHTML = 'Triangular'

    let list = document.getElementById("myDIV");
    list.classList.add("d-none");
    bang.classList.remove("d-none");


}


function EY() {
    nine.innerHTML = 'Refracting'
    curls.innerHTML = 'Reflecting'
    short.innerHTML = 'parabolic'

    let list = document.getElementById("myDIV");
    list.classList.add("d-none");
    bang.classList.add("d-none");

}


function MH() {
    nine.innerHTML = 'Heart-Shaped'
    curls.innerHTML = 'Top-Heavy'
    short.innerHTML = 'Full Lips'
    bang.innerHTML = 'Thin Lips'
    elegant.innerHTML = 'Wide Lips'
    quiff.innerHTML = 'Round Lips'
    
    let list = document.getElementById("myDIV");
    list.classList.remove("d-none");
    bang.classList.remove("d-none");

}

function NK() {
    nine.innerHTML = 'Gathered'
    curls.innerHTML = 'Strapless'
    short.innerHTML = 'Off Shoulder'
    bang.innerHTML = 'Halter'
    elegant.innerHTML = 'Racerback'
    quiff.innerHTML = 'Plunging'
    
    let list = document.getElementById("myDIV");
    list.classList.remove("d-none");
    bang.classList.remove("d-none");

}

function LG() {
    nine.innerHTML = 'Bow-legged'
    curls.innerHTML = 'Knock-kneed'
    short.innerHTML = 'FalseCurvature'
    bang.innerHTML = 'Normal'
    
    let list = document.getElementById("myDIV");
    list.classList.add("d-none");
    bang.classList.remove("d-none");
}

function ACS() {
    nine.innerHTML = 'Jackets'
    curls.innerHTML = 'Boots&Shoes'
    short.innerHTML = 'Bracelets'
    bang.innerHTML = 'Watches'
    elegant.innerHTML = 'Eyewear'
    quiff.innerHTML = 'Hats'
    
    let list = document.getElementById("myDIV");
    list.classList.remove("d-none");
    bang.classList.remove("d-none");
}

function BG() {
    nine.innerHTML = 'Edgeless'
    curls.innerHTML = 'Texture'
    short.innerHTML = '3D'
    bang.innerHTML = 'Surface'
    elegant.innerHTML = 'Color'
    quiff.innerHTML = 'Visual Cues'
    
    let list = document.getElementById("myDIV");
    list.classList.remove("d-none");
    bang.classList.remove("d-none");
}