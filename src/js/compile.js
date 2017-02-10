$(document).ready(function(){
	$("#play").click(function(){
		$('#pythonField').text(editor.getValue())
		$(".pygame-container").show("slow");
		$("#pygame").hide("slow");
		$("#pygame").attr('src', '');
		$(".loading").show("slow");


		//$("#pythonField").val("Compiling...");
		var vpythonField = $("#pythonField").val();
		if(vpythonField=='')
		{
		alert("Looks like you haven't added anything to compile.");
		}
		else{
			$.post("build/compile.php", //Required URL of the page on server
			{ // Data Sending With Request To Server
				pythonField: vpythonField,
			},
			function(response,status){ // Required Callback Function
				$(".loading").hide("slow");
				$("#pygame").attr('src', response);
				$("#pygame").show("slow");
				$("#pythonField").val(code);
			});

		}
	});
	$(".pygame-close").click(function(){
		$(".pygame-container").hide("slow");
	});
});