export const ItsWorking = () =>{
  alert('Hello world!');
};

// Toggles nav bar in and out of the viewport
export const displayMenu =(toggleId, navId)=>{
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    console.log('Its working');

    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show');
    });
  }
};


// Hides navigation menu after an element is clicked
export const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
};


//  Active section funciton
export function scrollActive() {
  // GET VIEPORT VERTICAL POSITION
  const scrollY = window.pageYOffset;

  sections.forEach((current) =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId= current.getAttribute('id');

    // console.log(sectionId);

    if (scrollY>sectionTop && scrollY <= sectionTop +sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('active');
    }
    // console.log(sectionTop);
  });
}
