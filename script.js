const selectElement = document.querySelector('#colorSelect');
const btn = document.querySelector("#btn");

function removeitem() {
    // Get the index of the selected option
    let selectedIndex = selectElement.selectedIndex;

    // Get the selected option
    let selectedOption = selectElement.options[selectedIndex];

    // Now you can get the value or the text of the selected option
    selectedOption.remove();
}

btn.addEventListener("click", removeitem);