//Assigning this right away keeps the addEventListner code line shorter
const memeform = document.querySelector('#memeForm')

//Use this const for later. It is the div that contains the results
const results = document.querySelector('.results')

memeform.addEventListener('submit', function(e) {

    // Prevents the page from reloading. I want the page to stay the same
    e.preventDefault();

    //Assign the variables right away
    const inputtext1 = document.getElementById('toptext').value;
    const inputtext2 = document.getElementById('bottomtext').value;
    const inputurlimage = document.getElementById('imginput').value;
    const results = document.querySelector('.results');

    //I need to make individual elements for each time the user generates a meme.
    const memeWrapper = document.createElement('div')
    memeWrapper.className = 'memeWrapper'

    // Create and configure the elements
    // I want separate text divs and class names becuase they are going at different positions on the image
    const text1 = document.createElement('div');
    text1.textContent = inputtext1;
    text1.className = 'topText'

    const text2 = document.createElement('div');
    text2.textContent = inputtext2;
    text2.className = 'bottomText'

    //Image to use as the 'background' to the text
    const image = document.createElement('img');
    image.src = inputurlimage;
    image.className = 'memeImage';

    //Remove button to be placed to delete the div
    const btn = document.createElement('button');
    btn.className = 'removebutton'
    //I want to add an ex to this button so it will be clear it means delete
    btn.innerText = 'X'

    //Make sure to limit big pictures. Also will do this in CSS
    image.style.maxWidth = '320px';
    image.style.height = 'auto';

    // Append the elements to the 'results' div
    memeWrapper.appendChild(image);
    memeWrapper.appendChild(text1);
    memeWrapper.appendChild(text2);
    memeWrapper.appendChild(btn)

    results.appendChild(memeWrapper);

    //Show the results of the div. This will change it from 'none' to 'block'
    results.style.display = 'block'

    //Reset the form for using it again in the same session
    memeform.reset();
})

// Removal process for each meme
results.addEventListener('click', function (event) {

    // Check if the clicked element has the 'removebutton' class
    if (event.target.classList.contains('removebutton')) {

        // Find the closest meme wrapper ancestor of the clicked button
        const memeWrapper = event.target.closest('.memeWrapper');
        
        // Remove the meme wrapper if found
        if (memeWrapper) {
            memeWrapper.remove();
        }
    }
});