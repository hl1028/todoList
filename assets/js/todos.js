$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//listen to the whole <ul>, but action only on ul's<li>

$("span").on("click", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
})