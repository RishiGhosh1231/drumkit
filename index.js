// Get the number of drums
let numberOfDrums = document.querySelectorAll('.drum').length;                             

// Run loop on all buttons
for(let i = 0; i < numberOfDrums; i++){                                                        
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){                
        let buttonInnerHTML = this.innerHTML;                                                  

        // Look for the button clicked and make sound with animation
        makeSound(buttonInnerHTML);                                                            
        doAnimation(buttonInnerHTML);
    });
}

document.addEventListener('keydown', function(event){
    // Look for the button pressed on keyboard and make sound with animation
    makeSound(event.key);
    doAnimation(event.key);
});

// The sound making function
function makeSound(key){
    switch(key){
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); 
        break;

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
            break;
        
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
            break; 

        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play(); 
            break;

        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play(); 
            break;

        case 'l':
            let bass = new Audio('sounds/kick-bass.mp3');
            bass.play(); 
            break;
        
        default : console.log(buttonInnerHTML);
    }
}

// The animation function
function doAnimation(key){
    let activeButton = document.querySelector('.' + key);
    
    activeButton.classList.add('pressed');

    setTimeout(() =>{
        activeButton.classList.remove('pressed');
    }, 100);
}