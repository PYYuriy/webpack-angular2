import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';


@Injectable()
export class HomeActions {
  static SET_MESSAGE = 'SET_MESSAGE';

  constructor(private ngRedux: NgRedux<any>) {}

  /**
   * set financials asset structure to the store
   * @param value
   */
  sendMessage(value) {
    console.log(value)
    this.ngRedux.dispatch({
      type: HomeActions.SET_MESSAGE,
      value
    });
  }

}
