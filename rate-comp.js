window.onload = function(){
   document.getElementById('submit').disabled = true; 
} 


function submitRate(){    
   document.getElementById('rating-container').style.display="none";
   document.getElementById('thankU-container').style.display="flex";   
}
function unselect(selectButton){
    for(let i =1; i<=5; i++){
        if(i==selectButton){

        }else{
            document.getElementById('rating-button'+i).style.backgroundColor="#252d37";
        }
    }
    
}
function rateSelectButtonColor(selectButton){
    document.getElementById('rating-button'+selectButton).style.backgroundColor="hsl(25, 97%, 53%)"; 
    document.getElementById('thankU-rate').innerText=(" You selected "+selectButton+" out of 5");
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').innerText = 'Submit';
    unselect(selectButton);      
}