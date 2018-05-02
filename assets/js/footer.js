function footerFix() {
  let height = $('footer').outerHeight() + 200;
  $('body').css({marginBottom: height});
}

function fixOnResize() {
  $(window).on('resize',function(){
    Footer.footerFix();
  });
}
