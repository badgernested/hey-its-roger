// function to detect if an element is scrolled into view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

function doScroll() {
        $mvar = $('.card_intro_item');

        $scrolly = $('.container');

        for (i=0; i<$mvar.length; i++)    {
          // check if element is scrolled into view
          if (isScrolledIntoView($mvar.eq(i))) {
            // element is scrolled into view, add animation class
            $mvar.eq(i).removeClass('end_animation');
            $mvar.eq(i).addClass('animation');
          }
          else {
            $mvar.eq(i).addClass('end_animation');
            $mvar.eq(i).removeClass('animation');
          }
        }
}

// listen for scroll event
$(document).ready(function() {
    doScroll();
    $('.container').scroll(doScroll);
});
