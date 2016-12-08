import { Map, fromJS } from 'immutable';
import { HomeActions } from '../actions/home.action';

const INITIAL_STATE = fromJS({
  someMessage: {},
});

export type ICounter = Map<string, any>;

export function homeReducer(
  state: ICounter = INITIAL_STATE,
  action = { type: '', value: []}) {

  switch (action.type) {

    case HomeActions.SET_MESSAGE:
      return state.update('someMessage', (value) => action.value);
    default:
      return state;
  }
}

