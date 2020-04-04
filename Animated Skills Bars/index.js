var mainHeader = document.getElementById("main-header"),
    mainBody   = document.getElementById("main-body");


    function mainBodyOpen(){
        
        if (mainBody.style.display == "block"){
            mainBody.style.display = "none";
        }else{
            mainBody.style.display = "block";
        }
    }
