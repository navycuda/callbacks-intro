// Functions
const findWaldo = (names,found) => {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name === 'Waldo') {
      found(i);
    }
  }
};
const actionWhenFound = (index) => {
  console.log(`Found Waldo at index ${index}`);
};

// Execution & Test Data
const names = [`Alice`, `Bob`, `Waldo`, `Winston`];

findWaldo(names, actionWhenFound);