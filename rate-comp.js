function submitRate(){    
   document.getElementById('rating-container').style.display="none";
   document.getElementById('thankU-container').style.display="flex";   
}
function unselect(n1, n2, n3, n4){
    document.getElementById('rating-button'+n1).style.backgroundColor="#252d37";
    document.getElementById('rating-button'+n2).style.backgroundColor="#252d37";
    document.getElementById('rating-button'+n3).style.backgroundColor="#252d37";
    document.getElementById('rating-button'+n4).style.backgroundColor="#252d37";    
}

function rateSelectButtonColor(selectButton){
    document.getElementById('rating-button'+selectButton).style.backgroundColor="hsl(25, 97%, 53%)"; 
    document.getElementById('thankU-rate').innerText=(" You selected "+selectButton+" out of 5");
   if(selectButton==1){
    unselect(2, 3, 4, 5);
   }else if(selectButton==2){
    unselect(1, 3, 4, 5);
   }else if(selectButton==3){
    unselect(2, 1, 4, 5);
   }else if(selectButton==4){
    unselect(2, 3, 1, 5);
   }else{
    unselect(2, 3, 4, 1);
   }      
}