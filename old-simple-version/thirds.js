$(document).ready(function(){
// article toggling
	$('header').on('click', function() {
		if ($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
				$('.inactive').removeClass('inactive');
				$('section').children().not('header').hide();
		} else if ($(this).parent().hasClass('inactive')) {
				$('section').removeClass('inactive');
				$('section').removeClass('active');
				$(this).parent().addClass('active');
				$(this).siblings().show();
				$('section').not('.active').addClass('inactive');
				$('.inactive').children('article').hide();
				$('.inactive').children('footer').hide();
		} else {
				$(this).parent().addClass('active');
				$(this).siblings().show();
				$('section').not('.active').addClass('inactive');
		}
	});

// start background
	var today = new Date;
	var h = today.getHours();
	var bg;
	switch(h){
		case 0:
		case 1:
		case 2:
			bg = "url('bgs/_0_3.png')";
			break;
		case 3:
		case 4:
		case 5:
			bg = "url('bgs/_3_6.png')";
			break;
		case 6:
		case 7:
		case 8:
			bg = "url('bgs/_6_9.png')";
			break;
		case 9:
		case 10:
		case 11:
			bg = "url('bgs/_9_12.png')";
			break;
		case 12:
		case 13:
		case 14:
			bg = "url('bgs/_12_15.png')";
			break;
		case 15:
		case 16:
		case 17:
			bg = "url('bgs/_15_18.png')";
			break;
		case 18:
		case 19:
		case 20:
			bg = "url('bgs/_18_21.png')";
			break;
		case 21:
		case 22:
		case 23:
		case 24:
			bg = "url('bgs/_21_24.png')";
			break;
		default: 
			bg = "url('bgs/PE_star.png')";
	}
	$('html').css("background-image", bg);
});
