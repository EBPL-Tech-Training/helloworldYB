
//Change the title of the website by modifying the <h1> tag

/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
/*The heading text changed to "Hello world!"" using JavaScript. 
//You did this by using a function called querySelector() to grab a reference to your heading, and then store it in a variable called myHeading. This is similar to what we did using CSS selectors. When you want to do something to an element, you need to select it first.
*/

//the code below Changes the image when is clicked.

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://i.postimg.cc/3NwBgvzK/surf-5493649-640.jpg') {
      myImage.setAttribute('src','https://i.postimg.cc/G26fhzHW/nazareth-1786795-640.jpg');
    } else {
      myImage.setAttribute('src','https://i.postimg.cc/3NwBgvzK/surf-5493649-640.jpg');
    }
}


// test the function below. by taken the comments off "//"

//alert('hello!');  


//change a title by pressing a button and addint your own text. Add the HTML code first on line 55. 


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function getInputValue(){

// Selecting the input element and get its value 
            var inputVal = document.getElementById("myInput").value;
            myHeading.textContent = 'Dare to Try!, ' + inputVal;
            // Displaying the value
            alert(inputVal);
        }



/*
    function greet() will make an alert pop up greeting the user
	the code below will take the text entered by the user and
    assign it to the variable name. It allows customization. 
    You can change the message 'hello' to something else. 
		
*/

        function greet()
        {
            let name = document.querySelector('#name').value;
            alert('hello, ' + name);
        }

//Bootstrap Slideshow element.

$(document).ready(function(){
    $("#myCarousel").carousel();
});



