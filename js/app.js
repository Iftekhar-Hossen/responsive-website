$(function () {

  particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('snow-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  $(window).scroll(function(){
    var scrollAmount = $(window).scrollTop()
    console.log(scrollAmount)
    if(scrollAmount > 30){
      $('.navbar').addClass('active')
      $('.navbar.active').css({
        marginTop: '-20px'
      })
    }
    else{
      $('.navbar').removeClass('active')
      $('.navbar').css({
        top: '0',
        marginTop: '0'
      })
    }
  })

  $('."nav-link').on(click, function () {
    ('href').show
  });












})