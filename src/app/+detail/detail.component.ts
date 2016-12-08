import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'detail',
  template: `
 
            <p>This is supporting text.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>

            <button md-button>LIKE</button>
            <button md-button>SHARE</button>
    <router-outlet></router-outlet>
  `
})
export class DetailComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
