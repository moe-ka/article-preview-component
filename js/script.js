const share = document.querySelector('.share');
const pop = document.querySelector('.pop-up');
const container = document.querySelector('.container');
const userWrapper = document.querySelector('.user-wrapper');
const avatar = document.querySelector('.avatar');

const bgColor = 'var(--LightGrayishBlue)';
const hoverColor = 'var(--VeryDarkGrayishBlue)';

const span = document.createElement('span');
const txtShare = document.createTextNode('SHARE');
span.appendChild(txtShare);
// set tag link


function link(){
    const linkWrapper = document.createElement('div');
    linkWrapper.classList.add('link-wrapper');

    for(let i = 0; i < 3; i++){
        x = document.createElement('a');
        linkWrapper.appendChild(x);
    }
    
    const aLinkTag = linkWrapper.querySelectorAll('a');
    for (let i = 0; i < aLinkTag.length; i++){
        aLinkTag[i].setAttribute('href', '#');
        const imgIcon = document.createElement('img');
        const icon = ['icon-facebook', 'icon-pinterest', 'icon-twitter'];
        aLinkTag[i].appendChild(imgIcon).setAttribute('src','images/'+ icon[i]+ '.svg');
    }

    userWrapper.insertBefore(linkWrapper, share);
    linkWrapper.insertBefore(span, aLinkTag[0]);
}

link();


const chooseLink = document.querySelector('.link-wrapper');

function myFunction(x) {
    if (x.matches) { // If media query matches 900px
        pop.style.display = 'none';
        share.addEventListener('mouseover', function(){
            pop.style.display = 'none';
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
            chooseLink.style.opacity = '1';
            chooseLink.style.zIndex = '0';
        });
       
        userWrapper.addEventListener('mouseout', function(){
            avatar.style.opacity = '1';
            userWrapper.style.backgroundColor = bgColor;
            chooseLink.style.opacity = '0';
            chooseLink.style.zIndex = '1';
        });
        
    } else {
            chooseLink.style.opacity = '0';
            chooseLink.style.zIndex = '-1';
            userWrapper.style.backgroundColor = bgColor;
            avatar.style.opacity = '1';

        share.addEventListener('mouseover', function(){
            userWrapper.style.backgroundColor = bgColor;
            avatar.style.opacity = '1';
            pop.style.display = 'flex';
            chooseLink.style.opacity = '0';
            chooseLink.style.zIndex = '-1';
        });
        
        share.addEventListener('mouseout', function(){
            pop.style.display = 'none';
            
        });
        userWrapper.addEventListener('mouseover', function(){
            avatar.style.opacity = '1';
            userWrapper.style.backgroundColor = bgColor;
            chooseLink.style.opacity = '0';
            chooseLink.style.zIndex = '-1';
        });

    }
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addEventListener('change', myFunction); // Attach listener function on state changes