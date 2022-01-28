var fs = require('fs');

// import fs from './node_modules/fs';
// const fs = require('fs');

fs.readFile('./databases.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    // parse JSON string to JSON object
    const databases = JSON.parse(data);

    // print all databases
    databases.forEach((db) => {
      console.log(`${db.name}: ${db.type}`);
    });
  }
});

const data1 = [
  {
    '<�����>': 3867063,
    '<��������>': '/',
  },
  {
    '<�����>': 9704306,
    '<��������>': '*',
  },
  {
    '<�����>': 5589247,
    '<��������>': '*',
  },
  {
    '<�����>': 9963101,
    '<��������>': '-',
  },
  {
    '<�����>': 5984781,
    '<��������>': '/',
  },
  {
    '<�����>': 4796076,
    '<��������>': '-',
  },
  {
    '<�����>': 9072253,
    '<��������>': '*',
  },
  {
    '<�����>': 3173417,
    '<��������>': '-',
  },
  {
    '<�����>': 2831053,
    '<��������>': '-',
  },
  {
    '<�����>': 127601,
    '<��������>': '*',
  },
  {
    '<�����>': 9345165,
    '<��������>': '/',
  },
  {
    '<�����>': 6383204,
    '<��������>': '-',
  },
  {
    '<�����>': 8275232,
    '<��������>': '+',
  },
  {
    '<�����>': 4170237,
    '<��������>': '-',
  },
  {
    '<�����>': 3878533,
    '<��������>': '/',
  },
  {
    '<�����>': 5452532,
    '<��������>': '-',
  },
  {
    '<�����>': 4869319,
    '<��������>': '/',
  },
  {
    '<�����>': 2182725,
    '<��������>': '/',
  },
  {
    '<�����>': 4114881,
    '<��������>': '-',
  },
  {
    '<�����>': 4245078,
    '<��������>': '*',
  },
  {
    '<�����>': 5969680,
    '<��������>': '*',
  },
  {
    '<�����>': 761901,
    '<��������>': '/',
  },
  {
    '<�����>': 6602487,
    '<��������>': '+',
  },
  {
    '<�����>': 9941762,
    '<��������>': '+',
  },
  {
    '<�����>': 3463548,
    '<��������>': '-',
  },
  {
    '<�����>': 4501266,
    '<��������>': '+',
  },
  {
    '<�����>': 3515521,
    '<��������>': '+',
  },
  {
    '<�����>': 5432721,
    '<��������>': '+',
  },
  {
    '<�����>': 4594335,
    '<��������>': '-',
  },
  {
    '<�����>': 8588075,
    '<��������>': '/',
  },
  {
    '<�����>': 7022423,
    '<��������>': '*',
  },
  {
    '<�����>': 7632669,
    '<��������>': '*',
  },
  {
    '<�����>': 2702879,
    '<��������>': '/',
  },
  {
    '<�����>': 7204975,
    '<��������>': '/',
  },
  {
    '<�����>': 3278034,
    '<��������>': '-',
  },
  {
    '<�����>': 8339166,
    '<��������>': '*',
  },
  {
    '<�����>': 5146348,
    '<��������>': '-',
  },
];

const data2 = [
  {
    '<Число>': 684767,
    '<Операция>': '-',
  },
  {
    '<Число>': 153471,
    '<Операция>': '-',
  },
  {
    '<Число>': 796766,
    '<Операция>': '+',
  },
  {
    '<Число>': 296969,
    '<Операция>': '+',
  },
  {
    '<Число>': 24790,
    '<Операция>': '/',
  },
  {
    '<Число>': 388988,
    '<Операция>': '*',
  },
  {
    '<Число>': 773151,
    '<Операция>': '+',
  },
  {
    '<Число>': 81814,
    '<Операция>': '-',
  },
  {
    '<Число>': 779853,
    '<Операция>': '+',
  },
  {
    '<Число>': 14263,
    '<Операция>': '+',
  },
  {
    '<Число>': 583103,
    '<Операция>': '+',
  },
  {
    '<Число>': 935035,
    '<Операция>': '/',
  },
  {
    '<Число>': 50858,
    '<Операция>': '-',
  },
  {
    '<Число>': 543742,
    '<Операция>': '*',
  },
  {
    '<Число>': 80743,
    '<Операция>': '+',
  },
  {
    '<Число>': 998078,
    '<Операция>': '-',
  },
  {
    '<Число>': 271230,
    '<Операция>': '/',
  },
  {
    '<Число>': 618951,
    '<Операция>': '/',
  },
  {
    '<Число>': 143254,
    '<Операция>': '/',
  },
  {
    '<Число>': 97157,
    '<Операция>': '*',
  },
  {
    '<Число>': 109087,
    '<Операция>': '+',
  },
  {
    '<Число>': 595066,
    '<Операция>': '*',
  },
  {
    '<Число>': 846584,
    '<Операция>': '-',
  },
  {
    '<Число>': 264105,
    '<Операция>': '*',
  },
  {
    '<Число>': 848798,
    '<Операция>': '-',
  },
  {
    '<Число>': 259475,
    '<Операция>': '/',
  },
  {
    '<Число>': 858705,
    '<Операция>': '/',
  },
  {
    '<Число>': 370753,
    '<Операция>': '+',
  },
  {
    '<Число>': 958833,
    '<Операция>': '/',
  },
  {
    '<Число>': 308477,
    '<Операция>': '*',
  },
  {
    '<Число>': 316278,
    '<Операция>': '*',
  },
  {
    '<Число>': 857090,
    '<Операция>': '/',
  },
  {
    '<Число>': 256389,
    '<Операция>': '/',
  },
  {
    '<Число>': 273781,
    '<Операция>': '/',
  },
  {
    '<Число>': 487455,
    '<Операция>': '*',
  },
  {
    '<Число>': 728873,
    '<Операция>': '-',
  },
  {
    '<Число>': 909508,
    '<Операция>': '/',
  },
];

export default function getResult(arr1, arr2) {
  let operationNumber = 0;
  let operationSuccess = 0;
  let output = [];

  const totalOperations = document.querySelector('.table__total-operations');
  const successOperations = document.querySelector('.table__success-operations');

  // Получаем длину самого короткого массива
  let dataLength = [arr1.length, arr2.length].sort()[0];

  for (let i = 0; i < dataLength; i++) {
    operationNumber++;
    let operator1 = arr1[i][Object.keys(arr1[i])[1]];
    let operator2 = arr2[i][Object.keys(arr2[i])[1]];

    if (operator1 === operator2) {
      operationSuccess++;
      let value1 = arr1[i][Object.keys(arr1[i])[0]];
      let value2 = arr2[i][Object.keys(arr2[i])[0]];
      let result = eval(value1 + operator1 + value2);
      output.push({ operation: operationNumber, value1: value1, value2: value2, operator: operator1, result: result });
    }
  }

  totalOperations.innerText = operationNumber;
  successOperations.innerText = operationSuccess;

  return output;
}

getResult(data1, data2);

// const filePath = path.join(__dirname, 'data', 'output.json');

// resultButton.addEventListener('click', function () {
//   fs.writeFile(filePath, JSON.stringify(getResult(data1, data2)), (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// });
