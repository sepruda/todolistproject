// Check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Delete todos with click on X
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
	if (event.which === 13) {
		//grabbing new todo text from input
		let todoText = $(this).val()
		$(this).val("");
		//creat a new li add to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></span></i> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});