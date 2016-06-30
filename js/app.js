//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation


//create a select element

//append items from menu as option to the select
 //creat a option element
 //options value is an href
 //options text is the of link
 //append option to select
 $("#menu").find("a").each(function(idx, elem){
   var $option = $("<option></option>");
   var link = $(elem).attr("href");
   var content = $(elem).html();
   $option.attr("value", link);
   $option.html(content);
   $("#mobile-menu").append($option);
 });

//bind page changing action to the event where the select option changes
$("#mobile-menu").on("change", function(){
  window.location = $(this).val();
});

//modify CSS so select is hidden in large screens
//modify CSS so select is hidden in small screens
$(window).on("resize load", function(){
  if (window.innerWidth > 768){
    $("#mobile-menu").hide();
    $("#menu ul").show();
  }
  else{
    $("#mobile-menu").show();
    $("#menu ul").hide();
  }
});

//the page that loads should be the selected option
$(window).on("load", function(){
  var arr = window.location.href.split("/");
  var filename = arr[arr.length-1];
  $("#mobile-menu").val(filename);

});
