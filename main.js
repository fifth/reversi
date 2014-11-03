h=Math.floor(window.innerHeight/8);
w=Math.floor(window.innerWidth/8);
shorter=(w>h)?h:w;
//white=1 black=2
var chessboard='0000000000000000000000000001200000021000000000000000000000000000';
// var chessboard='0000000000000000000000000002100000012000000000000000000000000000';
// var chessboard='0000100000200000002200000001200000021000000000001000010002200000';
var order='5244442521333312434444344340043443400434434444342133331252444425';
function changestr(pos, tar){
	str1=chessboard.substring(0, pos);
	str2=chessboard.substring(pos-(-1));
	chessboard=str1+tar+str2;
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
					// enable: function(){
					// 	if (check_able(i*8+j)) {
					// 		return true;
					// 	} else {
					// 		return false;
					// 	}
					// },
					// disable: function(){
					// 	if (check_able(i*8+j)) {
					// 		return false;
					// 	} else {
					// 		return true;
					// 	}
					// }
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
						if (check_able(d3.select(this).attr("id"), 2)) {
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
					},
					click: function(){
						if (check_able(d3.select(this).attr("id"), 2)) {
							action(d3.select(this).attr("id"), 2);
							
							for (first=5; first>0; first--) {
								for (i=0; i<64; i++) {
									if (first==order[i]) {
										if (check_able(i, 1)) {
											action(i, 1);
											return;
										}
									}
								}
							}


						}
					}
				});
		}
	}


});

