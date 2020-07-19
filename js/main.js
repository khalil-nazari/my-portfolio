

// portfolio links
const pLinks = document.querySelectorAll('.p-links');
const contentBody = document.querySelectorAll('.p-body');
contentBody.forEach(el => {
    if(el.attributes.id.value != 'home'){
        el.style.display="none"
    }
});


let pLinkId=[]; 
pLinks.forEach((pLink) => {
    btnToggle(pLinks, pLink);
    pLinkId.push(pLink.attributes.id.value);     
})





// Toggle the buttons
function btnToggle (pLinks, pLink) {
    pLink.addEventListener('click', () => {
        pLinks.forEach( (a) => {
            a.classList.remove('link-btns-active')
        })
        pLink.classList.add('link-btns-active')
        let id = pLink.attributes.id.value; 
        contentToggle(contentBody, id)
    })
}

function contentToggle (contentBody, id) {
    contentBody.forEach(el => {
        el.style.display="none"
        if(el.attributes.id.value == id){
            el.style.display="block"
        }
    });
}


// current year
const newDate = new Date(); 
const thisYear = newDate.getFullYear();
document.getElementById("thisYear").innerHTML = thisYear


// Scroll effect 
let prevScrollpos = window.pageYOffset

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset; 
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = "0";
      } else {
        document.querySelector('header').style.top = "-120px";
      }
      prevScrollpos = currentScrollPos;


}