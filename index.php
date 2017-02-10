

<html>
	<head>
		
		<title>WebPython</title>
		<script src="src/js/jquery.min.js"></script>
		<script src="src/js/compile.js"></script>
		<!--<link rel="stylesheet" type="text/css" href="src/css/style.css">-->
		<link rel="stylesheet" type="text/css" href="src/css/droplet.css">
	    <style>

	    	.pygame-container{
	    		position:absolute;
	    		width:100%;
	    		height:100%;
	    		background:#333;
	    		opacity: 1.0;
	    		z-index: 500;
	    		margin:0px;
	    		padding:0px;
	    		top:0px;
	    		left:0px;
	    	}
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

	      .pyCanvas{
	      	width:656px;
	      	margin:auto;
	      	height:496px;
	      	margin-top:200px;
	      	opacity:1;
	      	background:#222;
	      	border:1px solid black;
	      }
	      .pygame-close{
	      	position:absolute;
	      	top:0px;
	      	right:0px;
	      	width:64px;
	      	height:64px;
	      	padding:12px;
	      	font-size:38px;
	      	color:#FFF;
	      	cursor:pointer;
	      	font-weight:bold;
	      }
	      .loading{
	     	text-align: center;
	     	position:relative;
	     	line-height: 480px;
	     	font-size:32px;
	     	color:#FFF;
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

		<script src="src/js/coffee-script.js"></script>
	    <script src="src/js/vendor/ace/ace.js"></script>
	    <script src="src/js/droplet-full.js"></script>
    	<script src="palette.coffee" type="text/coffeescript"></script>
    	
		<div class="pygame-container" style="display:none;">
			<div class="pygame-close">X</div>
			<form style="" id="searchForm">
				<textarea style="display:none;" name="pythonField" id="pythonField" class="pythonText"></textarea>
			</form>

			<div class="pyCanvas">
				<div class="loading" style="display:none;">Compiling...</div>
				<iframe id="pygame" src="" style="border: 0px solid black; width:100%; height:100%;">
				</iframe>
			</div>
		</div>
		
	</body>

</html>