// // hide all the inputs
// $("input").hide()
// // show all the inputs
// $("input").show()
// // Add some pretty backgrounds
// $("h2").css("background", "blue")
// // Chain some changes
// $("h2").css("background","red").text("headings!")
// // Add some content
// $('body').append('<img src="http://i.minus.com/iFxelkyarGr5D.gif">');
// // And this:
// $('*').css('background-image', 'url(http://omfgdogs.com/omfgdogs.gif)');

var $form = $("#ajax-form");

var onSuccess = function(data, status) {
  var img = "<img src='"+data+"'/>";
  $("#result").html(img);
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  event.preventDefault();
  var mood = $form.find("[name='mood']:checked").val();
  var name = $form.find("[name='name']").val();
  $.get("getCat", {
    mood: mood,
    name: name
  })
    .done(onSuccess)
    .error(onError);
});