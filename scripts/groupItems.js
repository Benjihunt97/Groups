const defaultGroups = [
  {
    img: 'https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg',
    title: 'Book Club',
    members: '26',
    active: false
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/024/508/571/original/hand-drawn-chef-cooking-in-the-kitchen-flat-style-illustration-for-business-ideas-png.png',
    title: 'Comfort Cooking',
    members: '274',
    active: true
  },
  {
    img: 'https://i.pinimg.com/736x/c0/7c/77/c07c7738be532291b95f8003819f1bce.jpg',
    title: 'Beautiful Arts',
    members: '485',
    active: true
  },
  {
    img: 'https://img.freepik.com/free-vector/tiny-students-with-huge-sign-pi-flat-vector-illustration-boy-girl-studying-math-algebra-school-college-holding-ruler-using-laptop-geometric-figures-background-education-concept_74855-23227.jpg',
    title: 'Maths Geeks',
    members: '173',
    active: false
  }
];

class Groups {
  constructor(img, title, members, active) {
    this.img = img;
    this.title = title;
    this.members = members;
    this.active = active;
  }
  
  groupCard() {
    return `
      <div class="group-item">
        <button class="edit-group">
          <svg width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
        </button>
        <span class="group-state ${this.active ? 'block' : 'hidden'}"></span>
        <img class="group-img" src="${this.img}" alt="">
        <h3 class="group-title">${this.title}</h3>
        <p class="group-info">${this.members} members</p>
      </div>
    `;
  }
}

const groupDisplay = document.getElementById('group-display');

defaultGroups.forEach(item => {
  const groupItem = new Groups(item.img, item.title, item.members, item.active);
  groupDisplay.innerHTML += groupItem.groupCard();
});

const createGroup = document.getElementById('create-group-btn');
const addGroupBtn = document.getElementById('add-group-btn');
const cancelGroupBtn = document.getElementById('cancel-group-btn');
const addGroupCard = document.getElementById('create-group-display');
const mainOverlay = document.getElementById('main-overlay');

createGroup.addEventListener('click', () => {
  addGroupCard.classList.remove('hidden');
  mainOverlay.classList.remove('hidden');
});

// Add an event listener to the file input outside the button click handler
const imgValue = document.getElementById('img-input');
let imgSrc;

imgValue.addEventListener('change', (e) => {
  const imgFile = e.target.files[0];
  if (imgFile) {
    imgSrc = URL.createObjectURL(imgFile);
    const selectedImg = document.getElementById('selected-img');
    selectedImg.setAttribute('src', imgSrc);
  }
});

addGroupBtn.addEventListener('click', () => {
  const groupDisplay = document.getElementById('group-display');

  const titleValue = document.getElementById('title-input').value;
  const membersValue = document.getElementById('members-input').value;
  const activeValue = document.getElementById('active-input').checked;

  // Validate form fields
  if (imgValue.value === '' || titleValue === '' || membersValue === '') {
    alert('Error submitting form');
    return false;
  } else {
    // Create a new group with the image source and other values
    const newGroup = new Groups(imgSrc, titleValue, membersValue, activeValue);
    
    // Display the new group card
    groupDisplay.innerHTML += newGroup.groupCard();
    
    // Clear input fields
    imgValue.value = '';
    document.getElementById('title-input').value = '';
    document.getElementById('members-input').value = '';
    document.getElementById('active-input').checked = false;
    
    // Hide form and overlay
    addGroupCard.classList.add('hidden');
    mainOverlay.classList.add('hidden');
  }
});

cancelGroupBtn.addEventListener('click', () => {
   addGroupCard.classList.add('hidden');
  mainOverlay.classList.add('hidden');
});
