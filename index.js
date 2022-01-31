const path = require('path');
const fs = require('fs');
let output = [];

function getResult() {
  // синхронно получаем входящие данные из файлов
  let input1;
  let input2;

  try {
    input1 = JSON.parse(fs.readFileSync('./src/data/input1.json', 'utf8'));
    input2 = JSON.parse(fs.readFileSync('./src/data/input2.json', 'utf8'));
  } catch (err) {
    console.log('Error reading file');
  }

  // вычисляем длину самого короткого массива
  const theLength = [input1.length, input2.length];
  theLength.sort(function (a, b) {
    return a - b;
  });

  // обрабатываем полученные данные в цикле
  let operationNumber = 0;
  let operationSuccess = 0;
  let failedInput1 = [];
  let failedInput2 = [];
  // let output = [];

  for (let i = 0; i < theLength[0]; i++) {
    operationNumber++;
    if (input1[i] === undefined || input1[i] === null) {
      failedInput1.push(operationNumber);
      output.push({ failed: 'error in data 1' });
    } else if (input2[i] === undefined || input2[i] === null) {
      failedInput2.push(operationNumber);
      output.push({ failed: 'error in data 2' });
    } else {
      let operator1 = input1[i][Object.keys(input1[i])[1]];
      let operator2 = input2[i][Object.keys(input2[i])[1]];
      if (operator1 === operator2) {
        operationSuccess++;
        let value1 = input1[i][Object.keys(input1[i])[0]];
        let value2 = input2[i][Object.keys(input2[i])[0]];
        let result = eval(value1 + operator1 + value2);
        output.push({
          operation: operationNumber,
          value1: value1,
          value2: value2,
          operator: operator1,
          result: result,
        });
      }
    }
  }

  output.unshift({
    total: operationNumber,
    success: operationSuccess,
    failed: failedInput1.length + failedInput2.length,
    failedInput1: failedInput1,
    failedInput2: failedInput2,
  });

  // записываем результат в файл
  const filePath = path.join(__dirname, './src/data', 'output.json');
  fs.writeFile(filePath, JSON.stringify(output), function (err) {
    if (err) throw err;
  });

  return output;
}

getResult();

const http = require('http');
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>test-gpb</title>
      <style> 
      body {
        width: 700px;
      }
      
      h1 {
        text-align: left;
      }
      
      .form-upload {
        padding: 5px;
        border: 1px solid black;
      }
      
      table,
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }
      
      table {
        width: 100%;
        margin: 24px 0;
      }
      
      .button-download {
        margin: 24px 0;
      }
      
      a, a:visited {
        color: black;
        text-decoration: none;
      }
      </style>
    </head>
    <body>
      <form class="form-upload" action="#" method="post" enctype="multipart/form-data">
        <h1>Загрузка даннных</h1>
        <div>
          <p>Выберите первый файл:</p>
          <input type="file" name="input-1" />
        </div>
  
        <div>
          <p>Выберите второй файл:</p>
          <input type="file" name="input-2" />
        </div>
  
        <div class="button-download"><input type="submit" value="Загрузить файлы" /></div>
      </form>
  
      <table>
        <thead>
          <tr>
            <th colspan="5" class="table-header"><h1>Результат</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Операций всего</td>
            <td class="data-total">${output[0].total}</td>
          </tr>
          <tr>
            <td>Успешных операций (совпадение по математическому оператору)</td>
            <td class="data-success">${output[0].success}</td>
          </tr>
          <tr>
            <td>Несостоявшиеся операции (ошибка в данных)</td>
            <td class="data-failed">${output[0].failedInput1.length + output[0].failedInput2.length}</td>
          </tr>
          <tr>
            <td>Номера операций с ошибками в файле 1</td>
            <td class="data-failed-data1">${output[0].failedInput1}</td>
          </tr>
          <tr>
            <td>Номера операций с ошибками в файле 2</td>
            <td class="data-failed-data2">${output[0].failedInput2}</td>
          </tr>
        </tbody>
      </table>
  
      <button><a href="./data/output.json" download>Скачать результат</a></button>
    </body>
  </html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
