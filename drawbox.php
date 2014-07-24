<?php
	$w=$_REQUEST["width"];
	$re='';
	for ($i=1; $i <= 8; $i++) { 
		for ($j=1; $j <= 8; $j++) { 
			$re.="<div id='".$i.$j."' style='width:".$w."px; height: ".$w."px; position:absolute; top:".(($i-1)*$w)."px; left:".(($j-1)*$w)."px;'></div>";
		}
	}
	echo $re;
?>