window.onload=function(){
    

	var tog =document.querySelector(".toggle-menu");
    var men =document.querySelector("nav ul");

    tog.addEventListener('click',function(){
    	men.classList.toggle('show');
    	
    });
   

 

    land();
  
  

    skil();

    fadeIn2();

}

function land(){
	var conten=document.querySelector(".landing .content");
    var land=document.querySelector(".landing");

    land.style.overflow="visible";
    conten.style.left="0";
}




function fadeIn2(){
    var portfol =document.querySelector("#portfolio"); 

    var foto =document.querySelectorAll(".fotos figure"); 

    window.addEventListener("scroll",function(){


        let skilltop = portfol.offsetTop;
       let skillheight= portfol.offsetHeight;


       let windowheigh = this.innerHeight;
       let windowscrolltop = this.pageYOffset;
     
        if(windowscrolltop >=(skilltop + skillheight - windowheigh)){



            for(let elem of foto){
                 elem.style.opacity="1";
                 elem.style.top="0";
            }
   

       }

    }); 

}

function skil(){
	let ourskill= document.querySelector(".skills");

       window.addEventListener("scroll",function(){
 
        let skilltop = ourskill.offsetTop;
        let skillheight= ourskill.offsetHeight;
 

        let windowheigh = this.innerHeight;
        let windowscrolltop = this.pageYOffset;

	    if((windowscrolltop )> (skilltop + skillheight - windowheigh)){
	       let witq = document.querySelectorAll(".skill_progress span");

	       witq.forEach(skill => {
	     
	       skill.style.width = skill.dataset.progress;
       
         });

       }
    });
}