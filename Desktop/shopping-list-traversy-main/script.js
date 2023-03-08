const itemform = document.getElementById('item-form');
const iteminput = document.getElementById('item-input');
const itemlist = document.getElementById('item-list');

//Functions for eventlisteners....
function additem(e){
  e.preventDefault();

  const newitem = iteminput.value;

  //validate input  
  if (newitem === ' '){
    alert('Please add some item!!!');
    return;
  }

  //Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newitem));

  // first way of creating full child element
  // Create list item button
  // const button = document.createElement('button');
  // button.className = 'remove-item btn-link text-red';
  
  // Creating list's button icon
  // const icon = document.createElement('i');
  // icon.className = 'fa-solid fa-xmark';

  // Connecting all elements to parent node
  // button.appendChild(icon);
  // li.appendChild(button);

  //Second method - 2
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  console.log(li);

  //Uploading element to the DOM
  itemlist.appendChild(li);

  iteminput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createicon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}
function createicon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}


//Evernt listeners
itemform.addEventListener('submit', additem);