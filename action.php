<?php
	$action=$_REQUEST["action"];
	$status=$_REQUEST["status"];
	switch ($action) {
		case 'init':
			$status[4][4]='white';
			$status[5][5]='white';
			$status[4][5]='black';
			$status[5][4]='black';
			$status[4][3]='enable';
			$status[3][4]='enable';
			$status[5][6]='enable';
			$status[6][5]='enable';
			for ($i=1;$i<=8;$i++) { 
				for ($j=1;$j<=8;$j++) {
					if ($status[$i][$j]=='') {
						$status[$i][$j]='disable';
					}
				}
			}
			echo json_encode($status);
			break;
		default:
			# code...
			break;
	}
?>