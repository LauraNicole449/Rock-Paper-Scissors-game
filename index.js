
function reply_click(clicked_id)
{
    //console.log(clicked_id);
    
    //hidden cards selector
    let elements = document.getElementsByClassName("photo");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].id !== clicked_id){
            elements[i].remove();
            console.log(elements[i].id + " eliminado");
        } else {
            console.log(elements[i].id + " conservado");
        }
    }

   
    //show card game selected
    /*let elements1 = document.getElementsByClassName("game");
    for (var i = 0; i < elements1.length; i++) {
        console.log('hi2');
        elements1[i].removeAttribute("hidden");
        console.log('hi3');
    }*/
}

