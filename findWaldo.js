const { action } = require("commander");

// Functions
const findWaldo = (names,found) => {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name === 'Waldo') {
      found();
    }
  }
};
const actionWhenFound = () => {
  console.log('Found him!');
};

// Execution & Test Data
const names = [`Alice`, `Bob`, `Waldo`, `Winston`];

findWaldo(names, actionWhenFound);