//Here is a simple JavaScript function that checks if a number is even or odd and returns the appropriate string:
function checkEvenOrOdd(number) {  
    if (number % 2 === 0) {  
        return "Even";  
    } else {  
        return "Odd";  
    }  
}  

// Example usage:  
console.log(checkEvenOrOdd(4)); // Output: "Even"  
console.log(checkEvenOrOdd(7)); // Output: "Odd" 

// JavaScript function to add a new item to the list  
function addItem() {  
    // Get the unordered list element  
    const list = document.getElementById("myList");  

    // Create a new list item (li) element  
    const newItem = document.createElement("li");  

    // Set the text content of the new list item  
    newItem.textContent = "New List Item";  

    // Append the new list item to the unordered list  
    list.appendChild(newItem);  
}  

// Attach the addItem function to the button's click event  
document.getElementById("addButton").addEventListener("click", addItem);  


 // Function to change the background color based on the response  
 function changeBackgroundColor(response) {  
    const responseElement = document.getElementById("responseText");  

    if (response === "failed") {  
        responseElement.style.backgroundColor = "red";  
        responseElement.textContent = "Response: Failed";  
    } else if (response === "successful") {  
        responseElement.style.backgroundColor = "green";  
        responseElement.textContent = "Response: Successful";  
    } else {  
        responseElement.style.backgroundColor = "";
        // Reset background if response is unrecognized  
        responseElement.textContent = "Response: Unrecognized";  
    }  
}  

// Event listener to simulate checking for a response when the button is clicked  
document.getElementById("checkResponseBtn").addEventListener("click", function() {  
    // Simulate a response (you can change this to trigger actual responses)  
    const responses = ["failed", "successful"];  
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];  
    changeBackgroundColor(randomResponse);  
});  


async function fetchComments() {  
    try {  
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');  
        if (!response.ok) {  
            throw new Error('Network response was not ok ' + response.statusText);  
        }  
        const comments = await response.json();  
        displayComments(comments);  
    } catch (error) {  
        console.error('There was a problem with the fetch operation:', error);  
    }  
}  

function displayComments(comments) {  
    const commentsContainer = document.getElementById('comments');  
    commentsContainer.innerHTML = ''; 
    // Clear any existing comments  
    comments.forEach(comment => {  
        const commentDiv = document.createElement('div');  
        commentDiv.classList.add('comment');  
        commentDiv.innerHTML = `  
            <h3>${comment.name} <small>(Email: ${comment.email})</small></h3>  
            <p>${comment.body}</p>  
        `;  
        commentsContainer.appendChild(commentDiv);  
    });  
}  

document.getElementById('fetchCommentsBtn').addEventListener('click', fetchComments);   



function calculateAreaOfCircle(radius) {  
    return Math.PI * Math.pow(radius, 2);  
}  

document.getElementById('calculateAreaBtn').addEventListener('click', function() {  
    const radius = parseFloat(document.getElementById('radius').value);  
    if (isNaN(radius) || radius < 0) {  
        document.getElementById('result').innerText = 'Please enter a valid positive number for the radius.';  
        return;  
    }  
    const area = calculateAreaOfCircle(radius);  
    document.getElementById('result').innerText = `The area of the circle with radius ${radius} is: ${area.toFixed(2)}`;  
});  