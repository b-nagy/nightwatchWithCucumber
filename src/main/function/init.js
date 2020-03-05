function onLoad(){

    document.getElementById("btnCheck").addEventListener("click", function(){
        
        PAGE_submitterIdentification();

    });
}


var oldTxt;
function mouseOver()
{  
   //document.getElementById("myId").innerHTML = "snake";
   oldTxt = this.innerHTML;
   this.innerText = "snake";

}
function mouseOut()
{  
   //document.getElementById("myId").innerHTML = "This is a new TD1";
   this.innerText = oldTxt;
}

