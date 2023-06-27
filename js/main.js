document.addEventListener('DOMContentLoaded', function() {
    //Initializing materialbox
    var options;
    var materialboxes = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(materialboxes, options);

    //Initializing accordions
    var collapsibles = document.querySelectorAll('.collapsible');
    var collapsibleInitiate = M.Collapsible.init(collapsibles, options);

    //Initializing modals
    var modalOptions = {
        opacity: 0.8,
        preventScrolling: false
    };
    var modals = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modals, modalOptions);
});

//Integer
let variableNumber = 2;

//String
let color = "red";

//Change anything to red background
function changeColor(elementId) {
    document.getElementById(elementId).style.backgroundColor = color;
}

//Create a new button button
function createButton() {
    console.log("The function got called!");
    let newButton = document.createElement('a');
    newButton.className = "btn";
    newButton.innerHTML = "<b>New Button!</b>";
    newButton.id = "button"+variableNumber;
    variableNumber++;
    newButton.onclick = function() {
        changeColor(newButton.id);
    }
    document.getElementById("hero").appendChild(newButton);
}

function toggleDark() {
    document.body.classList.toggle('dark');
}