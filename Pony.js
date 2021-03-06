'use strict';
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
            if (this.isAllowedValue(attributes, key, value)) {
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
    Pony.prototype.isAllowedValue = _isAllowedValue;

    function _isAllowedValue (obj, key, value) {
        return (typeof obj[key] === typeof value) ? true : false;
    }

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