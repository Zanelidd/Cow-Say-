const information = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm a ${information.name} from ${information.campus}`,
    e : "oO",
    T : "U" ,
}));