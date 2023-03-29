function replaceFormWithInput(labelText, inputId, inputName) {
    // Get the form element by its ID
    const form = document.getElementById('collect_inside');
  
    // Create a new label element
    const newLabel = document.createElement('label');
    newLabel.htmlFor = inputId;
    newLabel.textContent = labelText;
  
    // Create a new input element
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = inputId;
    newInput.name = inputName;
  
    // Create a new submit button element
    const newSubmitBtn = document.createElement('button');
    newSubmitBtn.type = 'submit';
    newSubmitBtn.value = 'Submit';
    newSubmitBtn.className="btn btn-success";
  
    // Create a new reset button element
    const newResetBtn = document.createElement('button');
    newResetBtn.type = 'reset';
    newResetBtn.value = 'Reset';
    newSubmitBtn.className="btn btn-danger";
    
    // Create a new div element to contain the new input field and buttons
    const newDiv = document.createElement('div');
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newSubmitBtn);
    newDiv.appendChild(newResetBtn);
  
    // Replace the form with the new div
    form.parentNode.replaceChild(newDiv, form);
  }
  

  
const fornav = '<label for="text_input">Enterthe number of buttons</label>' + '<input type="text" id="text_input" name="text_input">';
const forhead = '';
const forpara = '';
const forjumbo = '';
const forimg = '';
const forvid = '';
const forlink = '';
