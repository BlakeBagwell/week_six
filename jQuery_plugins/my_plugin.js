var onOff = function($) {
  var offText = "Turn me on";
  var onText = "Turn me off";

  $.fn.switch = function() {
    var isOn = false;
    this.click(function() {
      isOn = !isOn;
      if (isOn) {
        $(this).text(onText);
      } else {
        $(this).text(offText);
      }
    });
  };
}(jQuery);
