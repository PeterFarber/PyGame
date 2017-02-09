$(document).ready(function(){
	$("#btn").click(function(){
		var code = $("#pythonField").val();
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
				$("#result").text(response);//"response" receives - whatever written in echo of above PHP script.
				$("#pythonField").val(code);
			});

		}
	});
});