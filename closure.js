const createLogger = () => {
  const memory = [];

  return {
    log(message) {
      memory.push(message);
    },
    getLogs() {
      console.log(memory);
    },
  };
};

const createRandomGenerator = (min, max) => {
  const memory = [];

  return (generate = () => {
    const rand = Math.floor(min + Math.random() * (max + 1 - min));
    memory.push(rand);

    console.log(rand);
    console.log(memory);
  });
};
