(function($) {

  $('#svgselect').svg({
    onLoad: function(svg) {

      svg.rect(0, 0, 500, 500, {
        fill: 'green'
      });

    }
  });


})(jQuery);
