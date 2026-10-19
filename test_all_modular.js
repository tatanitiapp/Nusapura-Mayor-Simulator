
const fs = require('fs');

const createdElements = {};
global.window = global;
global.document = {
  getElementById: (id) => {
    if (!createdElements[id]) {
      createdElements[id] = {
        id,
        innerHTML: '',
        textContent: '',
        style: {},
        classList: { 
          add: () => {}, 
          remove: () => {}, 
          toggle: () => {}, 
          contains: () => false 
        },
        setAttribute: () => {},
        getAttribute: () => '',
        addEventListener: () => {}
      };
    }
    return createdElements[id];
  },
  querySelectorAll: () => [],
  addEventListener: () => {}
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

// Load modular files in order
eval(fs.readFileSync('app/src/main/assets/data/events.js', 'utf8'));
eval(fs.readFileSync('app/src/main/assets/data/dangerous_dialogues.js', 'utf8'));
eval(fs.readFileSync('app/src/main/assets/js/app.js', 'utf8'));

console.log('Testing modular loading & game loop...');
initNewGame();
console.log('Game initialized. Year:', state.year, 'Term:', state.term);

console.log('Testing Quick Dock Openers:');
openCabinetDirect();
console.log('Cabinet opened successfully.');
returnFromSubModal('cabinetModal');

openMusrenbangDirect('yearSummaryModal');
console.log('Musrenbang opened with yearSummaryModal source.');
returnFromSubModal('musrenbangModal');
console.log('Returned to yearSummaryModal without issue.');

openPerdaDirect();
console.log('Perda opened successfully.');
returnFromSubModal('perdaModal');

openDiplomacyDirect();
console.log('Diplomacy opened successfully.');
returnFromSubModal('centralDiplomacyModal');

console.log('Testing Full Beat 0 -> Choice -> Beat 1 -> Choice -> Beat 2:');
renderCurrentEvent();
handleChoiceClick(0);
renderCurrentEvent();
handleDangerousChoice(0);
advanceFromDangerousChoice();
renderCurrentEvent();

console.log('ALL MODULAR TEST FLOWS EXECUTED 100% SUCCESFULLY!');
