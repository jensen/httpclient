import { useReducer, useCallback } from 'react';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from 'hooks/use-local-storage';

const initialState = {
  path: '',
  bodydata: [],
};

const reducer = (state, { type, ...action }) => {
  if (type === 'SET_PATH') {
    return { ...state, path: action.path };
  }

  if (type === 'SET_REQUEST') {
    return action.request;
  }

  if (type === 'ADD_BODY_DATA') {
    return produce(state, (draftState) => {
      draftState.bodydata.push({
        id: uuidv4(),
        key: '',
        value: '',
      });
    });
  }

  if (type === 'UPDATE_BODY_DATA') {
    const { data } = action;

    return produce(state, (draftState) => {
      const index = draftState.bodydata.findIndex((d) => d.id === data.id);

      if (index >= 0) {
        draftState.bodydata[index] = data;
      }
    });
  }

  if (type === 'REMOVE_BODY_DATA') {
    const { id } = action;

    return produce(state, (draftState) => {
      const index = draftState.bodydata.findIndex((data) => data.id === id);

      if (index >= 0) {
        draftState.bodydata.splice(index, 1);
      }
    });
  }

  throw new Error('Called reducer without supported type.');
};

export default (id) => {
  const [state, dispatch] = useReducer(reducer, { id, ...initialState });

  const setPath = (path) => dispatch({ type: 'SET_PATH', path });

  const addBodyData = () => dispatch({ type: 'ADD_BODY_DATA' });
  const updateBodyData = (data) => dispatch({ type: 'UPDATE_BODY_DATA', data });
  const removeBodyData = (id) => dispatch({ type: 'REMOVE_BODY_DATA', id });

  const setRequestDetails = useCallback(
    (request) => {
      dispatch({ type: 'SET_REQUEST', request: { id, ...request } });
    },
    [id],
  );

  useLocalStorage(id, { id, ...state }, setRequestDetails, true);

  return {
    path: state.path,
    setPath,
    bodydata: state.bodydata,
    addBodyData,
    updateBodyData,
    removeBodyData,
  };
};
