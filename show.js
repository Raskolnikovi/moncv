function showElement(x){
	
        var divid=document.getElementById(x);       
			

		var visibles = document.getElementsByClassName("visible");

		[].forEach.call(visibles, function (i) {i.classList.remove("visible");
			if(i!==divid)
			i.style.display="none";			
});		

		if(divid.style.display == 'none'){
		divid.classList.add("visible");


		divid.style.visibility='hidden';
		divid.style.display='block';		
		var nHeight = divid.clientHeight;

//		alert(nHeight);
		divid.style.height=0+'px';
		divid.style.visibility='visible';
		var txt = divid.innerText;
		divid.innerText="";

		
		setInterval(function(){ 
			if(divid.clientHeight!==nHeight){
			var dHeight = divid.clientHeight;
			    var newHeight = dHeight + 1;
			    divid.style.height = newHeight + 'px';}
			else{
				clearInterval();
				divid.innerText=txt;}	
					 }, 100);		
}
		else{
		var nHeight = divid.clientHeight;
		divid.style.display='none';
		}
}
