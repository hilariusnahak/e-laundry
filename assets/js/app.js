/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById( 'nav-menu' ),
  navToggle = document.getElementById( 'nav-toggle' ),
  navClose = document.getElementById( 'nav-close' )

/* Menu Show */
/* Validate if constant exists */
if ( navToggle )
{
  navToggle.addEventListener( 'click', () =>
  {
    navMenu.classList.add( 'show-menu' )
  } )
}

/* Menu Hidden */
/* Validate if constant exists */
if ( navClose )
{
  navClose.addEventListener( 'click', () =>
  {
    navMenu.classList.remove( 'show-menu' )
  } )
}

//*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll( '.nav__link' )

const linkAction = () =>
{
  const navMenu = document.getElementById( 'nav-menu' )
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove( 'show-menu' )
}
navLink.forEach( n => n.addEventListener( 'click', linkAction ) )

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>
{
  const header = document.getElementById( 'header' )
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add( 'shadow-header' )
    : header.classList.remove( 'shadow-header' )
}
window.addEventListener( 'scroll', shadowHeader )

/*=============== MAPS ===============*/
// Initialize and add the map
let map;

async function initMap ()
{
  // The location of Uluru
  const position = { lat: -7.785596273500772, lng: 110.35765018823207 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary( "maps" );
  const { AdvancedMarkerElement } = await google.maps.importLibrary( "marker" );

  // The map, centered at Uluru
  map = new Map( document.getElementById( "map" ), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  } );

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement( {
    map: map,
    position: position,
    title: "VR Loundry",
  } );
}

initMap();

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>
{
  const scrollUp = document.getElementById( 'scroll-up' )
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add( 'show-scroll' )
    : scrollUp.classList.remove( 'show-scroll' )
}
window.addEventListener( 'scroll', scrollUp )


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll( 'section[id]' )

const scrollActive = () =>
{
  const scrollDown = window.scrollY

  sections.forEach( current =>
  {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute( 'id' ),
      sectionClass = document.querySelector( '.nav__menu a[href*=' + sectionId + ']' )

    if ( scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight )
    {
      sectionClass.classList.add( 'active-link' )
    } else
    {
      sectionClass.classList.remove( 'active-link' )
    }
  } )
}
window.addEventListener( 'scroll', scrollActive )

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById( 'theme-button' )
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem( 'selected-theme' )
const selectedIcon = localStorage.getItem( 'selected-icon' )

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains( darkTheme ) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains( iconTheme ) ? 'ri-moon-fil' : 'ri-sun-line'

// We validate if the user previously chose a topic
if ( selectedTheme )
{
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[ selectedTheme === 'dark' ? 'add' : 'remove' ]( darkTheme )
  themeButton.classList[ selectedIcon === 'ri-moon-fil' ? 'add' : 'remove' ]( iconTheme )
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener( 'click', () =>
{
  // Add or remove the dark / icon theme
  document.body.classList.toggle( darkTheme )
  themeButton.classList.toggle( iconTheme )
  // We save the theme and the current icon that the user chose
  localStorage.setItem( 'selected-theme', getCurrentTheme() )
  localStorage.setItem( 'selected-icon', getCurrentIcon() )
} )

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal( {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
} )

sr.reveal( `.home__data, .contact__container, .footer` )
sr.reveal( `.home__img`, { origin: 'bottom' } )
sr.reveal( `.service__card, .pricing__card`, { interval: 100 } )
sr.reveal( `.about__data`, { origin: 'right' } )
sr.reveal( `.about__img`, { origin: 'left' } )

/*=============== FORM VALIDATION ===============*/

const form = document.querySelector( "form" );
const nameFull = document.getElementById( 'nama' );

nameFull.addEventListener( "input", ( event ) =>
{
  if ( nameFull.validity.typeMismatch )
  {
    nameFull.setCustomValidity( "Saya mengharapkan nama!" );
  } else
  {
    nameFull.setCustomValidity( "" );
  }
} );

// const error = nameFull.nextElementSibling;

// const nameRegExp = /\d/;

// window.addEventListener( 'load', () =>
// {
//   const isValid = nameFull.value.length === "" || nameRegExp.test( nameFull.value );
//   nameFull.className = isValid ? "valid" : "invalid";
// } );

// nameFull.addEventListener( "input", () =>
// {
//   const isValid = nameFull.value.length === "" || nameRegExp.test( nameFull.value );
//   if ( isValid )
//   {
//     nameFull.className = "valid"
//     error.textContent = "";
//     error.className = "error"
//   } else
//   {
//     nameFull.className = "invalid";
//   }
// } );

// form.addEventListener( "submit", ( event ) =>
// {
//   event.preventDefault();

//   const isValid = nameFull.value.length === 0 || emailRegExp.test( nameFull.value );
//   if ( !isValid )
//   {
//     nameFull.className = "invalid";
//     error.textContent = "I expect an nameFull, darling!";
//     error.className = "error active";
//   } else
//   {
//     nameFull.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   }
// } );

/*=============== SEND WA ===============*/
function sendMsgToWa ()
{

  if ( nameFull.value === "" || nameFull.value.length === 0 )
  {
    console.log( "Goblok Harus isi dlo itu Inputannya" )
  } else
  {
    const urlToWa = `https://wa.me/6285727704471?text=Nama saya ${ nama.value }, ${ comment.value }`;
    window.open( urlToWa, "_blank" );
  }
}
