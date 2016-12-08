/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import rootReducer from '../reducers';
import { IAppState } from '../reducers/index';
import { enhancers, middleware } from '../store/index';

let s1 = require('@angular/material/core/theming/prebuilt/deeppurple-amber.scss');
// let s2 = require('font-awesome/css/font-awesome.min.css');
let s3 = require('../assets/styles/main.scss')
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('./app.component.css'),
    s1, s3
  ],
  templateUrl: './app.html'
})

export class AppComponent {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  // Nav bar demo
  tabLinks = [
    {label: 'Index',  link: '',       icon: 'label_outline' },
    {label: 'Home',   link: 'home',   icon: 'home'},
    {label: 'Detail', link: 'detail', icon: 'find_in_page'},
    {label: 'About',  link: 'about',  icon: 'subject'},
  ];
  activeLinkIndex = 0;

  private viewContainerRef: ViewContainerRef;

  constructor(viewContainerRef: ViewContainerRef,
              private ngRedux: NgRedux<IAppState>) {

    ngRedux.configureStore(rootReducer, {home: undefined}, middleware, enhancers);
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    // console.log(s3)
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
