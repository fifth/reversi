function check_able(pos, tar){
	if (check_up(pos, tar)||check_down(pos, tar)||check_left(pos, tar)||check_right(pos, tar)||check_leftup(pos, tar)||check_leftdown(pos, tar)||check_rightup(pos, tar)||check_rightdown(pos, tar)) {
		return true;
	} else {
		return false;
	}
}
function check_up(pos, tar){
	if (((pos>=0)&&(pos<=7))||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-8;
	limit=pos%8;
	while ((find>=limit)&&(chessboard[find]==3-tar)) {
		find-=8;
	}
	if ((find>=limit)&&(chessboard[find]==tar)&&(pos-find!=8)) {
		return find;
	} else {
		return false;
	}
}
function check_down(pos, tar){
	if (((pos>=56)&&(pos<=63))||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-(-8);
	limit=56+pos%8;
	while ((find<=limit)&&(chessboard[find]==3-tar)) {
		find-=(-8);
	}
	if ((find<=limit)&&(chessboard[find]==tar)&&(find-pos!=8)) {
		return find;
	} else {
		return false;
	}
}
function check_left(pos, tar){
	if ((pos%8==0)||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-1;
	limit=pos-pos%8;
	while ((find>=limit)&&(chessboard[find]==3-tar)) {
		find-=1;
	}
	if ((find>=limit)&&(chessboard[find]==tar)&&(pos-find!=1)) {
		return find;
	} else {
		return false;
	}
}
function check_right(pos, tar){
	if ((pos%8==7)||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-(-1);
	limit=Math.floor(1+pos/8)*8-1;
	while ((find<=limit)&&(chessboard[find]==3-tar)) {
		find-=(-1);
	}
	// alert(limit+"."+find);
	if ((find<=limit)&&(chessboard[find]==tar)&&(find-pos!=1)) {
		return find;
	} else {
		return false;
	}
}
function check_leftup(pos, tar){
	if ((pos%8==0)||(pos<=7)||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-9;
	while ((find>7)&&(find%8!=0)&&(chessboard[find]==3-tar)) {
		find-=9;
	}
	if ((find>7)&&(find%8!=0)&&(chessboard[find]==tar)&&(pos-find!=9)) {
		return find;
	} else {
		return false;
	}
}
function check_leftdown(pos, tar){
	if ((pos%8==0)||(pos>=57)||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-(-7);
	while ((find<57)&&(find%8!=0)&&(chessboard[find]==3-tar)) {
		find-=(-7);
	}
	if ((find<57)&&(find%8!=0)&&(chessboard[find]==tar)&&(find-pos!=7)) {
		return find;
	} else {
		return false;
	}
}
function check_rightup(pos, tar){
	if ((pos%8==7)||(pos<7)||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-7;
	while ((find>=7)&&(find%8!=7)&&(chessboard[find]==3-tar)) {
		find-=7;
	}
	if ((find>=7)&&(find%8!=7)&&(chessboard[find]==tar)&&(pos-find!=7)) {
		return find;
	} else {
		return false;
	}
}
function check_rightdown(pos, tar){
	if ((pos%8==7)||(pos>=56)||(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-(-9);
	while ((find<56)&&(find%8!=7)&&(chessboard[find]==3-tar)) {
		find-=(-9);
	}
	if ((find<56)&&(find%8!=7)&&(chessboard[find]==tar)&&(find-pos!=9)) {
		return find;
	} else {
		return false;
	}
}