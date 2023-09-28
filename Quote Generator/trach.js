
let list = document.getElementById("quote-list");
let trashList = document.getElementById("trash-list");

function displaySavedQuotes() {
    const savedQuotes = JSON.parse(localStorage.getItem("deletedQuotes")) || [];
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
        deleteButton.style.borderRadius = '10px';
        deleteButton.style.border = 'none';
        deleteButton.style.padding = '0px';
        deleteButton.style.marginLeft = '780px';
        deleteButton.style.marginTop = '0px';
        deleteButton.style.backgroundColor='red'
        deleteButton.onclick = function () {
            const removedQuote = removeQuote(index);
            if (removedQuote) {
                alert(`Quote "${removedQuote.q}" by ${removedQuote.a} has been removed.`);
            }
        };
        quoteDiv.appendChild(deleteButton);

        const recoverButton = document.createElement("button");
        recoverButton.className = "Recover";
        recoverButton.innerHTML = '<span class="material-symbols-outlined">undo</span>';
        recoverButton.style.borderRadius = '10px';
        recoverButton.style.border = 'none';
        recoverButton.style.padding = '0px';
        recoverButton.style.marginLeft = '780px'; 
        recoverButton.style.marginTop = '0px';
        recoverButton.style.backgroundColor = 'green'
        recoverButton.onclick = function () {
            recoverQuote(index);
        };
        quoteDiv.appendChild(recoverButton);

        quoteList.appendChild(quoteDiv);
    });
}

function removeQuote(index) {
    const savedQuotes = JSON.parse(localStorage.getItem("deletedQuotes")) || [];
    const removedQuote = savedQuotes.splice(index, 1)[0];

    localStorage.setItem("deletedQuotes", JSON.stringify(savedQuotes));

    displaySavedQuotes();
    return removedQuote;
}

// function recoverQuote(index) {
//     const savedQuotes = JSON.parse(localStorage.getItem("deletedQuotes")) || [];
//     const recoveredQuote = savedQuotes.splice(index, 1)[0];

//     // if (recoveredQuote) {
//     //     const trashQuotes = JSON.parse(localStorage.getItem("library")) || [];
//     //     trashQuotes.push(recoveredQuote);
//     //     localStorage.setItem("library", JSON.stringify(savedQuotes));
//     //     localStorage.setItem("recoverQuotes", JSON.stringify(savedQuotes));

//     //     displaySavedQuotes(); 
//     // }

//     localStorage.setItem("library", JSON.stringify(savedQuotes));

//     displaySavedQuotes();
//     return recoveredQuote;
// }

function recoverQuote(index) {
    const savedQuotes = JSON.parse(localStorage.getItem("deletedQuotes")) || [];
    const recoveredQuote = savedQuotes.splice(index, 1)[0];

    if (recoveredQuote) {
        const libraryQuotes = JSON.parse(localStorage.getItem("library")) || [];
        libraryQuotes.push(recoveredQuote);
        localStorage.setItem("library", JSON.stringify(libraryQuotes));
        localStorage.setItem("deletedQuotes", JSON.stringify(savedQuotes));

        displaySavedQuotes(); 
    }

    return recoveredQuote;
}


function clearAllQuotes() {
  const savedQuotes = [];
  localStorage.setItem("deletedQuotes", JSON.stringify(savedQuotes));
  displaySavedQuotes();
}

document.addEventListener("DOMContentLoaded", function () {
  const clearButton = document.querySelector(".btn3");
  clearButton.addEventListener("click", function () {
      clearAllQuotes();
  });
})


displaySavedQuotes()


const goBackButton = document.querySelector(".btn2");
goBackButton.addEventListener("click", function () {
    
    window.location.href = "home.html"; 
});

displaySavedQuotes();



const goBackMyQuotesButton = document.querySelector(".btn1");
goBackMyQuotesButton.addEventListener("click", function () {
    window.location.href = "library.html"; 
});

displaySavedQuotes();