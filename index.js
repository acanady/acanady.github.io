//Shorthand for $(document).ready() only executes once the html document has been loaded successfully
$(function(){

$("#test").text("Lorem Ipsum");
$("#test").before("<i>Hmmm</i>");
 var txt = $("<p></p>").text("Howdy");
 $("#test").after("<b>Yolo</b>",txt);

});