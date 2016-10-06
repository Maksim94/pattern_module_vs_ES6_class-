var Pony = (function() {
    function Pony () {
        var attributes = {
            name: 'str',
            color: 'str',
            age: 1,
            gender: 'str',
            horseshoes: false,
            isRunning: false
        };

        this.set = function (key, value) {
            if (typeof attributes[key] === typeof value) {
                attributes[key] = value;
            } else {
                console.log('Input valid value');
            }
        };

        this.get = function (key) {
            return attributes[key];
        };
    }

    Pony.prototype.run = _run;
    Pony.prototype.stop = _stop;
    Pony.prototype.addHorseShoes = _addHorseShoes;

    function _run () {
        if (!this.get('isRunning')) {
            this.set('isRunning', true);
            console.log('Pony ' + this.get('name') + ' is running');
        } else {
            console.log('Ponny ' + this.get('name') + ' can\'t running faster');
        }
    }

    function _stop () {
        if (this.get('isRunning')) {
            this.set('isRunning', false);
            console.log('Pony ' + this.get('name') + ' is staying');
        } else {
            console.log('You can\'t stop staying Pony')
        }
    }

    function _addHorseShoes () {
        if (!this.get('horseshoes')) {
            this.set('horseshoes', true);
            console.log('Pony ' + this.get('name') + ' is shod');
        }
    }

    return Pony;
})();

var barbara = new Pony();

barbara.set('name', 'barbara');
barbara.set('age', 3);
barbara.set('color', 'gray');
barbara.set('gender', 'female');

barbara.run();
barbara.run();

barbara.stop();
barbara.stop();

console.log(barbara.get('horseshoes'));
barbara.addHorseShoes();
console.log(barbara.get('horseshoes'));


var carlo = new Pony();

carlo.set('name', 'carlo');
carlo.set('age', 5);
carlo.set('color', 'white');
carlo.set('gender', 'male');
carlo.set('isRunning', true)

carlo.run();
carlo.run();

carlo.stop();
carlo.stop();

console.log(carlo.get('horseshoes'));
carlo.addHorseShoes();
console.log(carlo.get('horseshoes'));