import { useReducer, useCallback } from 'react';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './use-local-storage';

const initialState = [];

const reducer = (state, { type, ...action }) => {
  if (type === 'SET') {
    return action.requests;
  }

  if (type === 'ADD_REQUEST') {
    const { method } = action;

    return produce(state, (draftState) => {
      draftState.push({
        id: uuidv4(),
        method,
      });
    });
  }

  if (type === 'UPDATE_REQUEST') {
    const { id, method } = action;

    return produce(state, (draftState) => {
      const index = draftState.findIndex((request) => request.id === id);

      draftState[index].method = method;
    });
  }

  if (type === 'REMOVE_REQUEST') {
    const { id } = action;

    return produce(state, (draftState) => {
      const index = draftState.findIndex((request) => request.id === id);

      if (index >= 0) {
        draftState.splice(index, 1);
      }
    });
  }

  throw new Error('Called reducer without supported type.');
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setRequests = useCallback(
    (requests) => dispatch({ type: 'SET', requests }),
    [],
  );

  useLocalStorage('requests', state, setRequests);

  const addRequest = (method) => dispatch({ type: 'ADD_REQUEST', method });
  const updateRequest = (id, method) =>
    dispatch({ type: 'UPDATE_REQUEST', id, method });
  const removeRequest = (id) => dispatch({ type: 'REMOVE_REQUEST', id });

  return {
    requests: state,
    addRequest,
    updateRequest,
    removeRequest,
  };
};
