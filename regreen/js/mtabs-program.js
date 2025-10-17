$(function() {
    $(".set-1").mtabs();

    $(".set-2").mtabs({
      tab_text_el: ".heading, .head, header",
      onTabSelect: function(idx) {
        console.log("Selected tab is: " + idx);
      },
      onReady: function () {
        console.log('Set 2 ready!');
      }
    });

    $('.set-1 .panel-1 .btn').on('click', function(event) {
      $('.set-1').mtabs('show', 2);

      event.preventDefault();
    });

    $('.set-1 .panel-1 .destroy').on('click', function(event) {
      $('.set-1').mtabs('destroy');

      event.preventDefault();
    });

    $('.set-1 .panel-1 .apply').on('click', function(event) {
      $('.set-1').mtabs();

      event.preventDefault();
    });

    $('.set-2 .panel-1 .btn').on('click', function(event) {
      $('.set-2').mtabs('show', 1);

      event.preventDefault();
    });
  });