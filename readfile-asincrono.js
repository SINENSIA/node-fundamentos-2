let fs = require('fs');

fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);
    process.exit();
});

setTimeout(function() {
    console.log('my Timer');
}, 3000);
console.log('Después de llamar a readFileSync');




