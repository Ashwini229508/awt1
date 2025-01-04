function createCounter() {
    let count = 0;
    return function() {
      count++;
      console.log(`Current count: ${count}`);
    };
  }