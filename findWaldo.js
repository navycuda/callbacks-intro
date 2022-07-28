// Functions
const findWaldo = (names,found) => {
  names.forEach((name, index) => {
    if (name === `Waldo`) {
      found(index);
    }
  });
};
const actionWhenFound = (index) => {
  console.log(`Found Waldo at index ${index}`);
};

// Execution & Test Data
const names = [`Alice`, `Bob`, `Waldo`, `Winston`];

findWaldo(names, actionWhenFound);