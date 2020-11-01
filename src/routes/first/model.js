
export default {

  namespace: 'first',

  state: {
    num: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *add({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'updateAdd', payload });
    },
    *minus({ payload }, { put}) {
      yield put({ type:'updateMinus', payload});
    }
  },

  reducers: {
    updateAdd(state, payload) {
      state.num+=payload.payload.num
      return {
        ...state,
        ...payload
      };
    },
    updateMinus(state, payload) {
      state.num-=payload.payload.num
      return {
        ...state,
        ...payload
      }
    }
  },

};
