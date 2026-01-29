const state = {
  bank: [],
  odds: [],
  evens: []
};


function addNumber(num) {
  state.bank.push(num);
  render();
}

function sortOne() {
  if (state.bank.length === 0) return; 
  
  const num = state.bank.shift(); 
  
  if (num % 2 === 0) {
    state.evens.push(num);
  } else {
    state.odds.push(num);  
  }
  
  render();
}


function sortAll() {
  while (state.bank.length > 0) {
    const num = state.bank.shift();
    
    if (num % 2 === 0) {
      state.evens.push(num);
    } else {
      state.odds.push(num);
    }
  }
  
  render();
}




function InputForm() {
  const form = document.createElement('div');
  form.innerHTML = `
    <label>Add a number to the bank 
      <input type="number" id="numberInput">
    </label>
    <button id="addBtn">Add number</button>
    <button id="sortOneBtn">Sort 1</button>
    <button id="sortAllBtn">Sort All</button>
  `;
  return form;
}


function NumberSection(title, numbers) {
  const section = document.createElement('div');
  section.innerHTML = `
    <h2>${title}</h2>
    <div class="numbers">${numbers.join(' ')}</div>
  `;
  return section;
}


function render() {
  const app = document.querySelector('#app');
  
  app.innerHTML = '<h1>Odds and Events</h1>';
  

  app.appendChild(InputForm());
  
 
  app.appendChild(NumberSection('Bank', state.bank));
  app.appendChild(NumberSection('Odds', state.odds));
  app.appendChild(NumberSection('Evens', state.evens));
  

  document.querySelector('#addBtn').addEventListener('click', () => {
    const input = document.querySelector('#numberInput');
    const value = parseInt(input.value);
    
    if (!isNaN(value)) {  
      addNumber(value);
    }
  });
  

  document.querySelector('#sortOneBtn').addEventListener('click', sortOne);
  document.querySelector('#sortAllBtn').addEventListener('click', sortAll);
}

render();