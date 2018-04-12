// put your js here :-)
static footerFix(){
  let height = $('footer').outerHeight() + 200;
  $('body').css({marginBottom: height});
}

fixOnResize(){
  $(window).on('resize',function(){
    Footer.footerFix();
  });
}
