function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
  }

//gerar a populacao de 0 a 300
// verificar o individuo com a formula
// converter o resultado em binario
//  f(x) = x2 - 4x + 6 
/**
 *   mutate(mutationRate) {
    for (let i = 0; i < this.keys.length; i += 1) {
      // If below predefined mutation rate,
      // generate a new random letter on this position.
      if (Math.random() < mutationRate) {
        this.keys[i] = generateLetter();
      }
    }
  }
 */
//fazer o cruzamento

function generatePopulation() {
  let population = []

  for (let index = 0; index < 8; index++) {
      population.push(random(0, 300));
  }

  return population;
}

function calculate (value, b, c) {
  return Math.floor(Math.pow(value, 2) - b * value + c);
}

function getIndividualsAsBinary() {
    const newArray = generatePopulation();
    const resultArray = [];

    newArray.map((item) => {
      let value = item.toString(2);
      
      console.log(value.length);

        if(value.length < 12) {
          while(value.length < 12) {
              value = 0 + value;
          }
      }
      resultArray.push(value.toString(2));
    });

    return resultArray;
}

function convertFromBinaryToDecimal(array) {
  const newArray = [];

  array.map((item) => {
    newArray.push(parseInt(item, 2));
  });

  return newArray;
}

function calculateEachMember() {
  const binaries = getIndividualsAsBinary();
  const newArray = [];

  const 

  // [000111,0111,0111,0111]

  // [{ binary: 000111, decimal: 0, result: 0 }, { binary: 00101, decimal: 0, result}]

  // 



  binaries.map((item) => {
    newArray.push(calculate(parseInt(item, 2), 4, 6));
  });

  return newArray;
}

console.log(calculateEachMember());