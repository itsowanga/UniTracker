document.querySelector("#module-side").addEventListener("click", function(){
    
       

});

function addAnimation(trigger){
        document.querySelector("#"+trigger).classList.add("pressed");

        setTimeout(function(){
            document.querySelector("#"+trigger).classList.remove("pressed");
        }, 100);
    }