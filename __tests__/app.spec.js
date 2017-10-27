'use strict';

import { greet, invertCase } from '../js/app'; //import the functions to test!

/* tests go here */
document.documentElement.innerHTML = "<html><head></head><body>...</body></html>";
require('../js/index.js');
$ = require('jquery'); //load the jQuery module (installed from npm)

describe('Basic math', function () {
    //tests
    test('Should add numbers correctly', function () {
        //javascript
        let sum = 1 + 1;

        //assertions
        expect(sum).toEqual(2);

    });

})

