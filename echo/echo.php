<!DOCTYPE html>

<html>
	<head>
		<style>
			article{
				border: 1px solid black;
			}
		</style>
	</head>
	<body>
		<?php

			$filepath = "testfile.txt";
			$myfile = fopen($filepath, "a") or die("Unable to open file!");
			
			if(isset($_POST["data"])){
				$toWrite = "<article><h1>".date("Y-m-d H:i:s")."</h1><br>".filter_var($_POST["data"]) . "</article><br>";
			
				//Write the data
				fwrite($myfile, $toWrite);
				fclose($myfile);			
			}

			//If you want to read the file,
			//just set the GET of "read" to anything
			if(isset($_GET["read"])){
				echo "Contents: <br>";
				echo file_get_contents($filepath);
			}else if(isset($_POST["read"])){
				
			}
		?>
	</body>
</html>