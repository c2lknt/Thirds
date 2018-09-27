var content = {
	musicArticle: '',
	fictionArticle: '',
	nonfictionArticle: ''
};
function linker(a){
	// e.preventDefault();
	var link = $(a).data('link');
	var loc = $(a).closest('article').attr('id');
	content[loc] = $('#' + loc).children().detach();
	$('#' + loc).load(link);
}
function backLinker(e){
	var target = $(e).parents('article').attr('id');
	$(e).parent().empty().append(content[target]);
}
function searcher(input, contentType){
	var results = [];
	if (input.length > 0){
		for (var p in postsList){
			if (postsList[p].title.toUpperCase().indexOf(input.toUpperCase()) > -1  && postsList[p].contentType == contentType){
				var listItem = '<li><span class="link" onclick="linker(this)" data-link="' + postsList[p].href + '">' + postsList[p].title + '</span></li>';
				results.push(listItem);
			}
		}
	}
	content[contentType + 'Article'] = $('#' + contentType + 'Article').children().detach();
	console.log(content);
	$('#' + contentType + 'Article').append('<span onClick="backLinker(this)" class="back-link">&lt; back</span><ul>' + results + '<ul>');
}
$(document).ready(function(){
	// $(".link").on("click", function(e){
	// 	e.preventDefault();
	// 	console.log("clicky");
	// 	linker(this);
	// });
// article toggling
	$('header').click(function() {
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
			bg = "url('/assets/images/0-3.png')";
			break;
		case 3:
		case 4:
		case 5:
			bg = "url('/assets/images/3-6.png')";
			break;
		case 6:
		case 7:
		case 8:
			bg = "url('/assets/images/6-9.png')";
			break;
		case 9:
		case 10:
		case 11:
			bg = "url('/assets/images/9-12.png')";
			break;
		case 12:
		case 13:
		case 14:
			bg = "url('/assets/images/12-15.png')";
			break;
		case 15:
		case 16:
		case 17:
			bg = "url('/assets/images/15-18.png')";
			break;
		case 18:
		case 19:
		case 20:
			bg = "url('/assets/images/18-21.png')";
			break;
		case 21:
		case 22:
		case 23:
		case 24:
			bg = "url('/assets/images/21-24.png')";
			break;
		default: 
			bg = "url('/assets/images/PE-star.png')";
	}
	$('html').css("background-image", bg);
	$('.search-input').keypress(function(e){
		if (e.keyCode == 13){
			searcher($(this).val(), $(this).attr('name'));
		}
	});
});