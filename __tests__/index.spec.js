'use strict';

import * as fs from 'fs'; //import functions for working with file system
const htmlContent = fs.readFileSync('index.html', 'utf-8'); //load the HTML content


/* Your tests go here */
describe('Alert Button', function () {
    //tests
    test('Test if button works', function () {
        //javascript
        let button = document.querySelector('#panic-button');

        let div = document.querySelector('.alert alert-danger d-none');
        button.click();
        expect(div.className).toEqual('alert alert-danger')
        //assertions
       

    });

})


