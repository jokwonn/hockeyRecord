
	$(document).ready(function() {
		
		$( '.close' ).click(function(){
				$(this).parent().parent().parent().addClass('off');
			}
        );
		
		
		$( '.Gcheck h6' ).click(function(){
				$(this).siblings().removeClass('goal_chk');
				$(this).addClass('goal_chk');
			}
        );

        $( '.hamburger' ).click(function(){
			$('.gnb_mobile').children('ul').toggleClass('menu_off');
			$('.gnb_mobile').children('.overlay').toggleClass('off');
			}
        );  
        $( '.hamburger_off' ).click(function(){
			$('.gnb_mobile').children('ul').toggleClass('menu_off');
			$('.gnb_mobile').children('.overlay').toggleClass('off');
		}
        );  		
		
		
		
		
    }); // end ready
	




function team_name(){$('#team_name').removeClass('off');}
function team_name_off(){$('#team_name').addClass('off');}

function score(){$('#score').removeClass('off');}
function score_off(){$('#score').addClass('off');}

function timer(){$('#timer').removeClass('off');}
function timer_off(){$('#timer').addClass('off');}


function goal_BT(){$('#goal_BT').removeClass('off');}
function goal_BT_off(){$('#goal_BT').addClass('off');}


function penalty_BT(){$('#penalty_BT').removeClass('off');}
function penalty_BT_off(){$('#penalty_BT').addClass('off');}

function penalty_sub_BT(){
	$('#penalty_sub_BT').removeClass('off');
	}
function penalty_sub_BT_off(){$('#penalty_sub_BT').addClass('off');}


function goalie_BT(){$('#goalie_BT').removeClass('off');}
function goalie_BT_off(){$('#goalie_BT').addClass('off');}


function shootout(){$('#shootout_BT').removeClass('off');}
function shootout_off(){$('#shootout_BT').addClass('off');}

function start_game(){$('#GStart_BT').removeClass('off');}
function start_game_off(){$('#GStart_BT').addClass('off');}





function test(){
	alert("gogo");
}