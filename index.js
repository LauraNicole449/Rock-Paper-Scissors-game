function reply_click(clicked_id) {
    document.getElementById("titles").style.display = "flex";
    // Hide cards
    let elements = Array.from(document.getElementsByClassName("optionCard")); // Convert to array
    elements.forEach(element => {
        if (element.id !== clicked_id) {
            document.getElementById("triangle").style.display = "none";
            console.log(element.id + " removed");
            element.style.display = "none";
        } else {
            console.log(element.id + " conserved");
        }
    });
    
    // Show a card randomly

    let remainingElements = Array.from(document.getElementsByClassName("optionCard"));
    
    let randomIndex = Math.floor(Math.random() * remainingElements.length);
    let randomElement = remainingElements[randomIndex];
    if (remainingElements.length > 0) {
        
       
        console.log("Showing randomly: " + randomElement.id);
       
        randomElement.style.display = "flex"; 
        console.log("hay 2 iguales");
        
        if (clicked_id === randomElement.id) {
            const originalCard = document.getElementById(randomElement.id);
            const clonedCard = originalCard.cloneNode(true);
            
            
            clonedCard.id = clicked_id;
            console.log("esta es la carta que usara el contrincante: " + clonedCard.id);
           console.log("hay 2 iguales");
           
        } else {  
            console.log("no hay 2 iguales");
        }
        
    } else {
        console.log("There are no remaining items to display.");
    }
    document.getElementById("otherCard").style.display = "flex";
    
    clicked_id.id = "yourCard";
    console.log("ahora es"+clicked_id);
      console.log("esto es lo ultimo");
       document.getElementById("yourCard").removeAttribute("hidden");
}