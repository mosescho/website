// //console.log('js is starting');

// $(document).ready(function () {
//   console.log('jquery is loaded');
//   console.log('selecting about me link', $('.about'));
//   $("#about ").on('click', function (e) {
//     e.preventDefault();
//     console.log($(this).attr('href').offset())
//     $('html, body').animate({
//       scrollTop: $($(this).attr('href'))
//     }, 500, 'linear');
//   })
// })


// $('#about').on('click', function (e) {
//   e.preventDefault();
//   console.log('about clicked')
//   $('html, body').animate({
//     // console.log()
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 500, 'linear');
// })

// Select anchor tags to click on 
// $(document).on("click", "#about", function (event) {
//   console.log("item clicked");

//   // Clear out the default action  
//   event.preventDefault();
//   console.log("working until now");

//   // Animate to selected selected target
//   $("html,body").animate({
//     scroll: $($(this).attr('href')).offset().top
//   }, 900);
//   console.log("no errors for now");
// });

// window.scrollTo({
//   top: 100,
//   left: 50,
//   behavior: 'smooth'
// })
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function navigateTo(id) {
  // selector
  // document.querySelector('#about-container')
  // document.getElementsByClassName('')
  var element = document.getElementById(id);
  console.log('element', element);
  element.scrollIntoView({
    behavior: 'smooth'
  });
}