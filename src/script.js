// Function to manipulate the tab click
function showTab(tabName) {
    var i, tabContent, tabs;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabs = document.getElementsByTagName("a");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Function to read dropdown values from file
function readDropdownValues(fileName) {
    var dropdownValues = [];
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "Resources/" + fileName, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            var allText = rawFile.responseText;
            dropdownValues = allText.split("\n");
            var tag = fileName.split(".")[0]
            setDropdownValues(dropdownValues, tag);
        }
    }
    rawFile.send();
}

// Function to set dropdown values in the HTML
function setDropdownValues(values, tagName) {
    var dropdown = document.getElementById(tagName);
    // Add a default "Select" option
    var defaultOption = document.createElement("option");
    defaultOption.text = "Select a value";
    defaultOption.value = "";
    defaultOption.classList.add("default-option");
    dropdown.add(defaultOption);
    // Add the text and values in the dropdown
    for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        var text = values[i].trim();
        if (tagName == "dropdown4"){
            option.text = text;
        } else {
            option.text = text.substring(text.indexOf(':') + 2);
        }
        option.value = values[i].trim();
        dropdown.add(option);
    }
}

// Red the files and call the function to set dropdown values
var files = ["dropdown1.txt", "dropdown2.txt", "dropdown3.txt", "dropdown4.txt"];
files.forEach(function(file) {
    readDropdownValues(file);
});

// Function to reset dropdown values
function resetDropdownValues() {
    var dropdowns = document.querySelectorAll('select');
    dropdowns.forEach(function(dropdown) {
        dropdown.selectedIndex = 0; // Set the selected index to the first option (assuming "Select" is the first option)
    });
}

// Add event listener to tabs
document.querySelectorAll('nav a').forEach(function(tab) {
    tab.addEventListener('click', function() {
        resetDropdownValues(); // Reset dropdown values when a tab is clicked
    });
});

// Function to send the user input to python file
function sendData() {
    var dropdown1 = document.getElementById('dropdown1').value;
    var dropdown2 = document.getElementById('dropdown2').value;
    var dropdown3 = document.getElementById('dropdown3').value;
    var dropdown4 = document.getElementById('dropdown4').value;

    var url = 'http://localhost:5000/process?dropdown1=' + dropdown1 + '&dropdown2=' + dropdown2 + '&dropdown3=' + dropdown3 + '&dropdown4=' + dropdown4;

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

// Function to set the response from the api to the page
function displayResult(data) {
    var outputContainer = document.getElementById('output-container');
    outputContainer.style.display = 'block';

    // Get the result image and text elements
    //var resultImage = document.getElementById('result-image');
    var resultText = document.getElementById('result-text');

    // Set the image source and alt text
    //resultImage.src = data.image_url;
    //resultImage.alt = "Result Image";

    // Set the text content
    resultText.textContent = data.concatenated_text;
}