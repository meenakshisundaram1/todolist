

import { all } from 'redux-saga/effects'
import { deleteForever } from './saga';

function* rootsaga() {
  yield all([
    deleteForever()
  
  ]);
}

export default rootsaga;
