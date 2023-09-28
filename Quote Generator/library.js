
let list = document.getElementById("quote-list")

function displaySavedQuotes() {
    const savedQuotes = JSON.parse(localStorage.getItem("library")) || [];
    const saveQuoteList = document.getElementById("quote-list");

    saveQuoteList.innerHTML = "";

    savedQuotes.forEach((data, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-element"
        listItem.innerHTML = `"${data.q}" "${data.a}"`;
        saveQuoteList.appendChild(listItem);

    });

}
displaySavedQuotes();

function removeQuote(index) {
    const savedQuotes = JSON.parse(localStorage.getItem("library")) || [];
    const removedQuote = savedQuotes.splice(index, 1)[0];

  
    const deletedQuotes = JSON.parse(localStorage.getItem("deletedQuotes")) || [];
    deletedQuotes.push(removedQuote);
    localStorage.setItem("deletedQuotes", JSON.stringify(deletedQuotes));

    localStorage.setItem("library", JSON.stringify(savedQuotes));

    displaySavedQuotes();
    return removedQuote;
}


function displaySavedQuotes() {
    const savedQuotes = JSON.parse(localStorage.getItem("library")) || [];
    const quoteList = document.getElementById("quote-list");

 
    quoteList.innerHTML = "";

    savedQuotes.forEach((data, index) => {
        const quoteDiv = document.createElement("div");
        quoteDiv.className = "quote-div";

        const quoteText = document.createElement("p");
        quoteText.textContent = `"${data.q}" by ${data.a}`;
        quoteDiv.appendChild(quoteText);

      
        const deleteButton = document.createElement("button");
        deleteButton.className = "Delete";
        deleteButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';
        deleteButton.style.borderRadius=('10px')
        deleteButton.style.border=('none')
        deleteButton.style.paddings=('7px')
        deleteButton.style.marginLeft=('780px')
        deleteButton.style.marginTop=('0px')
        deleteButton.onclick = function() {
            const removedQuote = removeQuote(index);
            if (removedQuote) {
                alert(`Quote "${removedQuote.q}" by ${removedQuote.a} has been removed.`);
            }
        };

        quoteDiv.appendChild(deleteButton);
        quoteList.appendChild(quoteDiv);
    });
}


displaySavedQuotes();


        var clearButton = document.getElementById("clearButton");
        clearButton.addEventListener("click", function() {
            var quotes = document.querySelectorAll(".quote");
            quotes.forEach(function(quote) {
                quote.remove();
            });
        });




        
             var trashButton = document.getElementById("trashButton");
             trashButton.addEventListener("click", function() {  
                 window.location.href = "trash.html";
             });

             var trashButton = document.getElementById("backButton");
             trashButton.addEventListener("click", function() {  
                 window.location.href = "quote.html";
             });


             function recoverQuote(index) {
                const deletedQuotes = JSON.parse(localStorage.getItem("deletedQuotes")) || [];
                const recoveredQuote = deletedQuotes.splice(index, 1)[0];
            
                if (recoveredQuote) {
                    const libraryQuotes = JSON.parse(localStorage.getItem("library")) || [];
                    libraryQuotes.push(recoveredQuote);
                    localStorage.setItem("library", JSON.stringify(libraryQuotes));
                    localStorage.setItem("deletedQuotes", JSON.stringify(deletedQuotes));
            
                    alert(`Quote "${recoveredQuote.q}" by ${recoveredQuote.a} has been recovered.`);
                    displaySavedQuotes();
                } else {
                    alert("No quote to recover at this index.");
                }
            
                return recoveredQuote;
            }
            
