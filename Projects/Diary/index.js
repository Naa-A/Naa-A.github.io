const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
    
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() {
        const allEntries = document.querySelectorAll('single-entry');
        /*
            - Use a for loop to iterate through all the elements in the
              allEntries variable.
            - Set each element's style.display property to 'none'.
        */
        entryDiv.style.display = 'block';
    })
    
    count++
}

entryForm.addEventListener('submit', addEntryToDom)