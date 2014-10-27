h=Math.floor(window.innerHeight/8);
w=Math.floor(window.innerWidth/8);
shorter=(w>h)?h:w;
// var chessboard='0000000000000000000000000001200000021000000000000000000000000000';
var chessboard='0000100000200000002200000001200000021000000000001000010002200000';
function check_able(pos){
	if (check_up(pos)||check_down(pos)||check_left(pos)||check_right(pos)||check_leftup(pos)||check_leftdown(pos)||check_rightup(pos)||check_rightdown(pos)) {
		return true;
	} else {
		return false;
	}
}
function check_up(pos){
	if ((pos>=0)&&(pos<=7)&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-8;
	limit=pos%8;
	while ((find>=limit)&&(chessboard[find]=='1')) {
		find-=8;
	}
	if ((find>=limit)&&(chessboard[find]=='2')&&(pos-find!=8)) {
		return true;
	} else {
		return false;
	}
}
function check_down(pos){
	if ((pos>=56)&&(pos<=63)&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos+8;
	limit=56+pos%8;
	while ((find<=limit)&&(chessboard[find]=='1')) {
		find+=8;
	}
	if ((find<=limit)&&(chessboard[find]=='2')&&(find-pos!=8)) {
		return true;
	} else {
		return false;
	}
}
function check_left(pos){
	if ((pos%8==0)&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-1;
	limit=pos-pos%8;
	while ((find>=limit)&&(chessboard[find]=='1')) {
		find-=1;
	}
	if ((find>=limit)&&(chessboard[find]=='2')&&(pos-find!=1)) {
		return true;
	} else {
		return false;
	}
}
function check_right(pos){
	if (pos==26) {
		alert(pos)
	}
	if ((pos%8==7)&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos+1;
	limit=Math.floor(1+pos/8)*8-1;
	while ((find<=limit)&&(chessboard[find]=='1')) {
		find+=1;
	}
	if ((find<=limit)&&(chessboard[find]=='2')&&(find-pos!=1)) {
		return true;
	} else {
		return false;
	}
}
function check_leftup(pos){
	if (((pos%8==0)||(pos<=7))&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-9;
	while ((find>7)&&(find%8!=0)&&(chessboard[find]=='1')) {
		find-=9;
	}
	if ((find>7)&&(find%8!=0)&&(chessboard[find]=='2')&&(pos-find!=9)) {
		return true;
	} else {
		return false;
	}
}
function check_leftdown(pos){
	if (((pos%8==0)||(pos>=57))&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos+7;
	while ((find<57)&&(find%8!=0)&&(chessboard[find]=='1')) {
		find+=7;
	}
	if ((find<57)&&(find%8!=0)&&(chessboard[find]=='2')&&(find-pos!=7)) {
		return true;
	} else {
		return false;
	}
}
function check_rightup(pos){
	if (((pos%8==7)||(pos<7))&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos-7;
	while ((find>=7)&&(find%8!=7)&&(chessboard[find]=='1')) {
		find-=7;
	}
	if ((find>=7)&&(find%8!=7)&&(chessboard[find]=='2')&&(pos-find!=7)) {
		return true;
	} else {
		return false;
	}
}
function check_rightdown(pos){
	if (((pos%8==7)||(pos>=56))&&(chessboard[pos]!='0')) {
		return false;
	}
	find=pos+9;
	while ((find<56)&&(find%8!=7)&&(chessboard[find]=='1')) {
		find+=9;
	}
	if ((find<56)&&(find%8!=7)&&(chessboard[find]=='2')&&(find-pos!=9)) {
		return true;
	} else {
		return false;
	}
}
$(document).ready(function(){
	d3.select("body")
		.append("svg")
		.attr("id", "box")
		.attr("width", shorter*8)
		.attr("height", shorter*8)
		.style("position", "absolute")
		.style("left", (window.innerWidth-shorter*8)/2)
		.style("top", (window.innerHeight-shorter*8)/2);
	for (i=7; i>=0; i--){
		for (j=7; j>=0; j--){
			d3.select("svg")
				.append("rect")
				.classed({
					box: true,
					enable: function(){
						if (check_able(i*8+j)) {
							return true;
						} else {
							return false;
						}
					},
					disable: function(){
						if (check_able(i*8+j)) {
							return false;
						} else {
							return true;
						}
					}
				})
				.attr({
					width: shorter,
					height: shorter,
					x: j*shorter,
					y: i*shorter,
					fill: function(){
						if (chessboard[i*8+j]=='1'){
							return "#FFFFFF";
						} else if (chessboard[i*8+j]=='2'){
							return "#000000";
						} else {
							return "#DDDDDD";
						}
					},
					id: i*8+j
				})
				.on({
					mouseover: function(){
						if (check_able(d3.select(this).attr("id"))) {
							d3.select(this).attr("fill", "#777777");
						}
					},
					mouseout: function(){
						d3.select(this)
							.attr("fill", function(){
								if (chessboard[d3.select(this).attr("id")]=='1'){
									return "#FFFFFF";
								} else if (chessboard[d3.select(this).attr("id")]=='2'){
									return "#000000";
								} else {
									return "#DDDDDD";
								}
							});
					}
				});
		}
	}
})