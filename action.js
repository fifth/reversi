function action(pos, tar) {
	total=0;
	total+=action_up(pos, tar);	
	total+=action_down(pos, tar);	
	total+=action_left(pos, tar);	
	total+=action_right(pos, tar);	
	total+=action_leftup(pos, tar);	
	total+=action_rightup(pos, tar);	
	total+=action_leftdown(pos, tar);	
	total+=action_rightdown(pos, tar);
	return total
}
function action_up(pos, tar) {
	if (find=check_up(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos>find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=8;
		}
		return count;
	} else {
		return 0;
	}
}
function action_down(pos, tar) {
	if (find=check_down(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos<find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=(-8);
		}
		return count;
	} else {
		return 0;
	}
}
function action_left(pos, tar) {
	if (find=check_left(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos>find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=1;
		}
		return count;
	} else {
		return 0;
	}
}
function action_right(pos, tar) {
	if (find=check_right(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos<find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=(-1);
		}
		return count;
	} else {
		return 0;
	}
}
function action_leftup(pos, tar) {
	if (find=check_leftup(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos>find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=9;
		}
		return count;
	} else {
		return 0;
	}
}
function action_rightup(pos, tar) {
	if (find=check_rightup(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos>find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=7;
		}
		return count;
	} else {
		return 0;
	}
}
function action_leftdown(pos, tar) {
	if (find=check_leftdown(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos<find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=(-7);
		}
		return count;
	} else {
		return 0;
	}
}
function action_rightdown(pos, tar) {
	if (find=check_rightdown(pos, tar)) {
		if (tar==2) {
			color='#000000';
		} else if (tar==1) {
			color='#FFFFFF';
		}
		count=0;
		while (pos<find) {
			changestr(pos, tar);
			count++;
			$("#"+pos).attr("fill", color);
			pos-=(-9);
		}
		return count;
	} else {
		return 0;
	}
}