<!DOCTYPE html>

<html>
	<body>
		<?php

			$filepath = "testfile.txt";
			$myfile = fopen($filepath, "a") or die("Unable to open file!");
			
			$toWrite = filter_var($_GET["data"]) . "<br>";
			
			//Write the data
			fwrite($myfile, $toWrite);
			fclose($myfile);



			//If you want to read the file,
			//just set the GET of "read" to anything
			if(isset($_GET["read"])){
				echo "Contents: <br>";
				echo file_get_contents($filepath);
			}
		?>
	</body>
</html>