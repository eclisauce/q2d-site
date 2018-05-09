function footerFix() {
  let height = $('footer').outerHeight() + 100;
  $('body').css({marginBottom: height});
}

function fixOnResize() {
  $(window).on('resize',function(){
    Footer.footerFix();
  });
}
