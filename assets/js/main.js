// put your js here :-)
static footerFix(){
  let height = $('footer').outerHeight() + 190;
  $('body').css({marginBottom: height});
}

fixOnResize(){
  $(window).on('resize',function(){
    Footer.footerFix();
  });
}
