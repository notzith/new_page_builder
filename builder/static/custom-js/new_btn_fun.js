
const contentContainer = document.getElementById('main');
let elementCount = 0;

function addParagraph() {
    // Prompt the user for the text content and ID of the new paragraph
    const paragraphText = prompt('Enter the text for the new paragraph:', '');
    const paragraphId = prompt('Enter the ID for the new paragraph:', '');

    // If the user entered text and an ID, create a new paragraph element with that text and ID
    if (paragraphText && paragraphId) {
        const newParagraph = document.createElement('p');
        newParagraph.classList.add('card-text');
        newParagraph.textContent = paragraphText;
        newParagraph.id = paragraphId;

        // Add the new paragraph to the container element
        contentContainer.appendChild(newParagraph);

        // Increment the element count
        elementCount++;
    }
}
function addLine() {
    const br = document.createElement('br');
    myElement.parentNode.insertBefore(br, myElement.nextSibling);

}

function addImage() {
    // Create a new input element of type file
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    // When the user selects a file, create a new img element with the file as the source and alt text
    fileInput.onchange = function() {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        const newImage = document.createElement('img');
        newImage.classList.add('card-img-top');
        newImage.src = URL.createObjectURL(selectedFile);
        const imgAlt = prompt('Enter the alt text for the image:', '');
        newImage.alt = imgAlt;
  
        // Add the new image to the container element
        contentContainer.appendChild(newImage);
  
        // Increment the element count
        elementCount++;
      }
    };
  
    // Click the file input to trigger the file selection dialog
    fileInput.click();
  }
  

function addHeading() {
    // Prompt the user for the text content and ID of the new heading
    const headingText = prompt('Enter the text for the new heading:', '');
    const headingId = prompt('Enter the ID for the new heading:', '');

    // If the user entered text and an ID, create a new heading element with that text and ID
    if (headingText && headingId) {
        const newHeading = document.createElement('h1');
        newHeading.classList.add('card-title');
        newHeading.textContent = headingText;
        newHeading.id = headingId;

        // Add the new heading to the container element
        contentContainer.appendChild(newHeading);

        // Increment the element count
        elementCount++;
    }
}

function removeLast() {
    // Get the last child element of the container
    const lastChild = contentContainer.lastChild;

    // If the last child exists, remove it
    if (lastChild) {
        contentContainer.removeChild(lastChild);
        elementCount--;
    }
}

function saveFile() {
    // Get the innerHTML of the container element
    const containerHtml = contentContainer.innerHTML;

    // Create a new blob object with the HTML content
    const fileBlob = new Blob([containerHtml], { type: 'text/html' });

    // Create a new download URL for the blob
    const downloadUrl = URL.createObjectURL(fileBlob);

    // Create a new anchor element and set its href and download attributes
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.download = 'my-file.html';

    // Click the download link to initiate the download
    downloadLink.click();

    // Clean up the download URL and anchor element
    URL.revokeObjectURL(downloadUrl);
    downloadLink.remove();
}
