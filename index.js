const fs = require('fs');
const csv = require('csv');



fs.createReadStream(__dirname + '/public/test.csv').pipe(csv.parse({columns: true },(err, data) => { fs.writeFileSync('output.json', JSON.stringify(data));}));


