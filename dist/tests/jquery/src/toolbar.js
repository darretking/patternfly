(function($) {
  $(document).ready(function() {
    // Upon clicking the find button, show the find dropdown content
    $(".btn-find").click(function () {
      $(this).parent().find(".find-pf-dropdown-container").toggle();
    });
    // Upon clicking the find close button, hide the find dropdown content
    $(".btn-find-close").click(function () {
      $(".find-pf-dropdown-container").hide();
    });
  });
})(jQuery);
