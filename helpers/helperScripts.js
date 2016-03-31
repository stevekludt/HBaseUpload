/**
 * Created by steve on 3/31/16.
 */
var parse = require('csv-parse');

module.exports = {
    parseCSV: function(data) {
        //console.log(data);
        parse(data, {delimiter: ',', columns: true}, function(err, output) {
            console.log(output);
            //console.log(JSON.stringify(output));
        })
    }
};
