$(document).ready(function(){



var startplay=document.getElementById("startbt");
var uHand=document.getElementById("user_choice");
var botHand=document.getElementById("bot_choice");
var rockSign=document.getElementById("rock");
var paperSign=document.getElementById("paper");
var scissorSign=document.getElementById("scissor");
var game=document.getElementById("gamebt");
var player=document.getElementById("player_name");
var restartbt=document.getElementById("restart");


var interval;

var signs=["./images/paper.png","./images/scissor.png","./images/rock.png"];
var random;
var init=$("#initial");
var userdiv=$("#user_name");
restartbt.disabled=true;
restartbt.style.display="none";
var rounds=1;
var match;
var pscore=0;
var bscore=0;
var url="./images/star.png";
var clicked=false;


///////////////////////////////////////////////////////////////////////////////////////////////////////////

gamebt.addEventListener('click',function(){

if(player.value!=="")
{
	if(document.getElementById("femaleop").checked)
	{
		document.getElementById("user").src="./images/girl.png";
		proceed();
	}
	else if (document.getElementById("maleop").checked) 
	{
		proceed();
	}
	else
		alert("please fill the details first");


}
else
alert("please fill the details first");

});

function proceed()
{
init.disabled=true;
document.getElementById("pname").innerHTML=player.value;
userdiv.disabled=true;
init.hide();
userdiv.hide();

startRounds();
}


//////////////////////////////////////////////////////////////////////////////////////////////////////



function startRounds()
{

	var interval_main=setInterval(function()
	{
	

		if(rounds<=3)
		{

				if(clicked!=false)
				{

						clearInterval(interval);
						
						if(match==true)
							{
								$("#user_score").append($("<li><img src="+url+"></li>"));
								pscore=pscore+1;
								rounds++;

							}
						else if(match==false)
							{
								rounds++;
								bscore=bscore+1;
								$("#bot_score").append($("<li><img src="+url+"></li>"));
							}	
						else
							{
								console.log("retry");

							}

							clicked=false;
							startplay.disabled=false;
				}
		



		}
		else
		{

			clearInterval(interval_main);
			clearInterval(interval);
			startplay.disabled=true;
			startplay.style.display="none";
			restartbt.style.display="block";
			restartbt.disabled=false;
			if(pscore>bscore)
			{
				document.getElementById("win-lost").src="./images/win.png";
			
			}
			else
			{
								
								document.getElementById("win-lost").src="./images/lost.png";			
			
			}
			rounds=1;

		}		
	


		
	},5);

	


}




restartbt.addEventListener('click',function()
{
	startplay.disabled=false;
	startplay.style.display="inline";
	restartbt.style.display="none";
	restartbt.disabled=true;
	$("#user_score").empty();
	$("#bot_score").empty();	
					document.getElementById("win-lost").src="";

	pscore=0;
	bscore=0;
	proceed();



});


startplay.addEventListener('click',function(){

		interval=setInterval(function(){
	
		random=Math.floor(Math.random()*3);
		uHand.src=signs[random];
		random=Math.floor(Math.random()*3);
		botHand.src=signs[random];		
	
		},100);
		startplay.disabled=true;
		
	});


rockSign.addEventListener('click',function(){
	clicked=true;
	clearInterval(interval);
	setPlayerSign(signs[2],);
	getResult("rock");
	

});
paperSign.addEventListener('click',function(){
	clicked=true;
	clearInterval(interval);
	setPlayerSign(signs[0]);
	getResult("paper");

});
scissorSign.addEventListener('click',function(){
	clicked=true;
	clearInterval(interval);
	setPlayerSign(signs[1]);
	getResult("scissor");

});

function setPlayerSign(playersign)
{
	uHand.src=playersign;
}



function getResult(usersign)
{
	switch(usersign)
	{
		case "rock":if(random==0)
					{
						
						match=false;
					}
					else if(random==1)
					{
						
						match=true;
					}
					else
					{
						match=null;
					}
	
		break;

		case "paper":if(random==1)
					{
						match=false;
					}
					else if(random==2)
					{
					
						match=true;
					}
					else
					{
					
						match=null;
					}
	
		break;
		case "scissor":if(random==0)
					{

						match=true;
					}
					else if(random==2)
					{
						match=false;
					}
					else
					{
						
						match=null;
					}
	
		break;

	}
}






});