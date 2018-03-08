$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//listen to the whole <ul>, but action only on ul's<li>

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$("#slide").click(function (){
	$("input[type='text']").slideToggle(500);
	$(this).toggleClass("fa fa-plus");
});