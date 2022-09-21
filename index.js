const Benchmark = require('benchmark');
const {linearSearch, binarySearch} = require('./search');

const numbers = [];
for (let i=0; i <= 4000000; i++) {
    numbers.push(i);
}

const target = numbers[0];

const suite = new Benchmark.Suite;

suite
    .add('linear search', function() {
    linearSearch(numbers, target);
    })
    .add('binary search', function() {
        binarySearch(numbers, target, 0, numbers.length-1)
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds`));
    })
    .run();