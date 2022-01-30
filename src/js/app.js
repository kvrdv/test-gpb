const path = require('path');
const fs = require('fs');

// отображаем данные в ui
const dataTotal = document.querySelector('.data-total');
const dataSuccess = document.querySelector('.data-success');
const dataFailed = document.querySelector('.data-failed');
const dataFailedData1 = document.querySelector('.data-failed-data1');
const dataFailedData2 = document.querySelector('.data-failed-data2');

dataTotal.innerText = operationNumber;
dataSuccess.innerText = operationSuccess;
dataFailed.innerText = failedInput1.length + failedInput2.length;
dataFailedData1 = failedInput1;
dataFailedData2 = failedInput2;

let getOutputData;

try {
  getOutputData = JSON.parse(fs.readFileSync('./src/data/output.json', 'utf8'));
} catch (err) {
  console.log('Error reading file');
}
