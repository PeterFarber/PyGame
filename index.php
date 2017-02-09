

<html>
	<head>
		
		<title>WebPython</title>
		<script src="src/js/jquery.min.js"></script>
		<script src="src/js/compile.js"></script>
		<!--<link rel="stylesheet" type="text/css" href="src/css/style.css">-->
		<link rel="stylesheet" type="text/css" href="src/css/droplet.css">
	    <style>

	      #left-panel {
	        position: absolute;
	        top: 0; bottom: 0; width: 100%; left: 0;
	      }
	      #droplet-config {
	        position: absolute;
	        top: 25; bottom: 0; left: 0; right: 0;
	      }
	      #droplet-editor-wrapper {
	        position: absolute;
	        top: 25; bottom: 0; right: 0; left: 0;
	        overflow: hidden;
	      }
	      #right-panel {
	        position: absolute;
	        top: 0; bottom: 0; left: 525px; right: 0;
	      }
	      #toggle, #update{
	      	display: inline-block;
			height: 25px;
			width:50%;
			margin:0px;
	        cursor: pointer;
	        background-color: #DDD;
	        text-align: center;
	        background-color:#90caf9;
	        color:#FFF;
	      }
	      #play {
	      	display: inline-block;
			height: 25px;
			width:50%;
			margin:0px;
			float:right;
	        cursor: pointer;
	        background-color: #DDD;
	        text-align: center;
	        border-left:0px solid black;
	        color:#FFF;
	        background-color:#a5d6a7;
	      }
	      #close {
	        position: absolute;
	        left: -25px;
	        width: 25px;
	        top: 0;
	        bottom: 0;
	        background-color: #FDD;
	        cursor: pointer;
	      }
	      .droplet-palette-scroller{
	      	top:142px !important;
	      	overflow-x: scroll;
	      }
	      .droplet-palette-wrapper{
	      	width:520px !important;
	      	max-width: 100% !important;
	      }
	      .droplet-wrapper-div{
	      	left: 520px !important;
	      }
	    </style>
	</head>

	<body>
		<div id="droplet-config" style="display:none;"></div>
		<div id="left-panel">

			<div id="toggle">
				Toggle
			</div>
			<div id="play">
				Play
			</div>
			<div id="droplet-editor-wrapper">
				<div id="droplet-editor">
				</div>
			</div>
		</div>

		<div id="compile">
		</div>

		<script src="src/js/coffee-script.js"></script>
	    <script src="src/js/vendor/ace/ace.js"></script>
	    <script src="src/js/droplet-full.js"></script>
    	<script src="palette.coffee" type="text/coffeescript"></script>
		<!--
		<div class="container">
			<div class="title">Pencilcode.py</div>
			<form class="shrink" id="searchForm">
				<textarea name="pythonField" id="pythonField" class="pythonText"></textarea>
			</form>

			<button id="btn" class="pythonButton">Compile</button>

			<div id="result"></div>
			<iframe src="output/serpentduel.html" class="pyCanvas">

			</iframe>
		</div>
		-->
	</body>

</html>