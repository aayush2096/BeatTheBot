$(document).ready(function(){



var startplay=document.getElementById("startbt");
var interval;
var signcount=0;
var uHand=document.getElementById("user_choice");
var botHand=document.getElementById("bot_choice");
var signs=["./images/paper.png","./images/scissor.png","./images/rock.png"];
var random;
var rockSign=document.getElementById("rock");
var paperSign=document.getElementById("paper");
var scissorSign=document.getElementById("scissor");
var init=$("#initial");
var userdiv=$("#user_name");
var game=document.getElementById("gamebt");
var player=document.getElementById("player_name");
var rounds=1;
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
wuserdiv.hide();


}


//////////////////////////////////////////////////////////////////////////////////////////////////////



function startRounds()
{

	while(rounds<=3)
	{

	}

}







startplay.addEventListener('click',function(){



		interval=setInterval(function(){
		signcount=signcount%3;
		uHand.src=signs[signcount];
		random=Math.floor(Math.random()*3);
		botHand.src=signs[random];
		signcount++;
		startplay.disabled=true;


		},200);
	});


rockSign.addEventListener('click',function(){
	startplay.disabled=false;
	clearInterval(interval);
	setPlayerSign(signs[2],);
	getResult("rock");
	rounds++;

});
paperSign.addEventListener('click',function(){
	startplay.disabled=false;
	clearInterval(interval);
	setPlayerSign(signs[0]);
	getResult("paper");
	rounds++;

});
scissorSign.addEventListener('click',function(){
	startplay.disabled=false;
	clearInterval(interval);
	setPlayerSign(signs[1]);
	getResult("scissor");
	rounds++;

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
						console.log("rock lose to paper");
					}
					else if(random==1)
					{
						console.log("scissor lose to rock")
					}
					else
					{
						console.log("retry");
					}
	
		break;

		case "paper":if(random==1)
					{
						console.log("paper lose to scissor");
					}
					else if(random==2)
					{
						console.log("rock lose to paper")
					}
					else
					{
						console.log("retry");
					}
	
		break;
		case "scissor":if(random==0)
					{
						console.log("paper lose to scissor");
					}
					else if(random==2)
					{
						console.log("scissor lose to rock");
					}
					else
					{
						console.log("retry");
					}
	
		break;

	}
}






});