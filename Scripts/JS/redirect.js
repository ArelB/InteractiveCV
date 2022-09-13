function redirect(object){
    //Redirects the user based on the ID of the button passed

    if(object == "Arel"){
        window.location.href = "Arel.html";
    }

    if(object == "firstMatch"){
        window.location.href ="Matching.html";
    }

    if(object == "secondMatch"){
        window.location.href ="MatchMe.html";
    }

    if(object == "thirdMatch"){
        window.location.href ="MatchingFuture.html";
    }
}

function downloadCV(){
    event.preventDefault();
    window.open('ArelBokobzaYoungCapitalNEXTcv.pdf');
}
