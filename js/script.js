const share = document.querySelector('.share');
const pop = document.querySelector('.pop-up');
const container = document.querySelector('.container');
const userWrapper = document.querySelector('.user-wrapper');
const avatar = document.querySelector('.avatar');

const bgColor = 'var(--LightGrayishBlue)';
const hoverColor = 'var(--VeryDarkGrayishBlue)';

function link(){
    
}

function myFunction(x) {
    if (x.matches) { // If media query matches 900px
        // pop.style.display = 'none';
        share.addEventListener('mouseover', function(){
            pop.style.display = 'none';
            // newPop.classList.add('show-newpop');
            avatar.style.opacity = '0';
            userWrapper.style.backgroundColor = hoverColor;
            
            
        });
        share.addEventListener('mouseout', function(){
            avatar.style.opacity = '1';
            userWrapper.style.backgroundColor = bgColor;
        });
        
        userWrapper.addEventListener('mouseover', function(){
            avatar.style.opacity = '0';
            userWrapper.style.backgroundColor = hoverColor;
        });
        userWrapper.addEventListener('mouseout', function(){
            avatar.style.opacity = '1';
            userWrapper.style.backgroundColor = bgColor;
        });
        
    } else {
            userWrapper.style.backgroundColor = bgColor;
            avatar.style.opacity = '1';
            share.addEventListener('mouseover', function(){
            userWrapper.style.backgroundColor = bgColor;
            avatar.style.opacity = '1';
            pop.style.display = 'flex';
        });
        
        share.addEventListener('mouseout', function(){
            pop.style.display = 'none';
            
        });
        userWrapper.addEventListener('mouseover', function(){
            avatar.style.opacity = '1';
            userWrapper.style.backgroundColor = bgColor;
        });
    }
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addEventListener('change', myFunction); // Attach listener function on state changes

// // make elemen new
// const tagPopNew = document.createElement('div');
// container.children[1].appendChild(tagPopNew);
// tagPopNew.classList.add('new-pop');

// // new pop
// const newPop = document.querySelector('.new-pop');
// // children new pop
// const spanTxt = document.createElement('span');
// const textIsi = document.createTextNode('SHARE');
// spanTxt.appendChild(textIsi);
// newPop.appendChild(spanTxt);

// function link() {
//     for(let i = 0; i < 3; i++){
//         x = document.createElement('a');
//         newPop.appendChild(x);
//     }
//     const aLinkTag = newPop.querySelectorAll('a');
//     for (let i = 0; i < aLinkTag.length; i++){
//         aLinkTag[i].setAttribute('href', '#');
//         const imgIcon = document.createElement('img');
//         const icon = ['icon-facebook', 'icon-pinterest', 'icon-twitter'];
//         aLinkTag[i].appendChild(imgIcon).setAttribute('src','images/'+ icon[i]+ '.svg');
//         }
//     }

// // style
// newPop.style.backgroundColor = 'black';

