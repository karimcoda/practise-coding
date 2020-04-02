var height      = "350px",
    expanInfo   = document.getElementById("more-info"),
    button      = document.getElementById("clickMe"),
    mainHeading = document.getElementById("main-heading");


    function readMore(){
        if(expanInfo.style.height == height){
            mainHeading.style.transform = "scale(1)" ;
            expanInfo.style.height = "0px";
            button.innerHTML = "Read More";
        }else{
            mainHeading.style.transform = "scale(0.7)" ;
            expanInfo.style.height = height;
            button.innerHTML = "Less More";
        }
    }
   
