var p1button= document.getElementById("p1button");
var p2button= document.getElementById("p2button");
var inp= document.getElementById("winningsc");
var winningscoredis= document.getElementById("winningscore");
var reset= document.getElementById("reset");
var p1dis=document.getElementById("p1display");
var p2dis=document.getElementById("p2display");
var gameover=false;
var winningscore=5;
var p1score=0;
var p2score=0;
p1button.addEventListener("click", function(){
	if(!gameover){
		p1score++;
		if(p1score===winningscore){	
			gameover=true;
			p1dis.classList.add("winner");
		}

			p1dis.textContent = p1score;
		
	}
})
p2button.addEventListener("click", function(){
	if(!gameover){
			p2score++;
			if(p2score===winningscore){	
			gameover=true;
			p2dis.classList.add("winner");
		}
			p2dis.textContent = p2score;
		}
});
reset.addEventListener("click", function(){
	rst();
});
function rst(){
	p1score=0;
	p2score=0;
	p1dis.textContent=0;
	p2dis.textContent=0;
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	gameover=false;
}
inp.addEventListener("change", function(){
	winningscoredis.textContent=inp.value;
	winningscore=Number(inp.value);
	rst();
}) ;