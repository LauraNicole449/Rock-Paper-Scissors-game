function reply_click(clicked_id) {
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
        
        if (clicked_id == randomElement.id) {
            const originalCard = document.getElementById(randomElement.id);
            const clonedCard = originalCard.cloneNode(true);
            //let positionCard = originalCard.parentNode.appendChild(clonedCard);
            
            clonedCard.id = "otherCard";
            
           console.log("hay 2 iguales");
           
        } else {
            
            console.log("no hay 2 iguales");
        }
    
           
        
    } else {
        console.log("There are no remaining items to display.");
    }
    
    switch (randomElement.id){
        case "paper":
            document.getElementById("otherCard").style.backgroundImage = "url('images/icon-paper.svg')";
            console.log("PAPEL");
            break;
        case "scissors":
            document.getElementById("otherCard").style.backgroundImage = "url('images/icon-scissors.svg')";
            console.log("TIJERAS");
            break;
        case "rock":
            document.getElementById("otherCard").style.backgroundImage = "url('images/icon-rock.svg')";
            console.log("PIEDRA");
            break;
       }
    
    document.getElementById("titles").removeAttribute("hidden");

}