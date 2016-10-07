'use strict';
document.addEventListener('DOMContentLoaded', handler, false);

function handler () {
    var barbara = new Pony();
    var carlo = new PonyES6();

    barbara.set('name', 'barbara');
    barbara.set('color', 'gray');
    barbara.set('age', 2);
    barbara.set('gender', 'female');

    carlo.set('name', 'carlo');
    carlo.set('color', 'white');
    carlo.set('age', 5);
    carlo.set('gender', 'male');

    console.dir(Pony);
    console.dir(PonyES6);

    console.log(barbara);
    console.log(carlo);
}