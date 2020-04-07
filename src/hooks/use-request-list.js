import { useReducer } from "react";
import produce from "immer";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  host: "",
  requests: [],
};

const reducer = (state, { type, ...action }) => {
  if (type === "UPDATE_HOST") {
    const { host } = action;

    return produce(state, (draftState) => {
      draftState.host = host;
    });
  }

  if (type === "NEW_REQUEST") {
    const { method } = action;

    return produce(state, (draftState) => {
      draftState.requests.push({
        id: uuidv4(),
        method,
        path: "",
        data: [],
      });
    });
  }

  if (type === "UPDATE_REQUEST") {
    const { request } = action;

    return produce(state, (draftState) => {
      const index = draftState.requests.findIndex((r) => r.id === request.id);

      if (index >= 0) {
        draftState.requests[index] = request;
      }
    });
  }

  if (type === "REMOVE_REQUEST") {
    const { request } = action;

    return produce(state, (draftState) => {
      const index = draftState.requests.findIndex((r) => r.id === request.id);

      if (index >= 0) {
        draftState.requests.splice(index, 1);
      }
    });
  }

  if (type === "ADD_BODY_DATA") {
    const { id } = action;

    return produce(state, (draftState) => {
      const index = draftState.requests.findIndex(
        (request) => request.id === id
      );

      if (index >= 0) {
        draftState.requests[index].data.push({
          id: uuidv4(),
          key: "",
          value: "",
        });
      }
    });
  }

  if (type === "UPDATE_BODY_DATA") {
    const { requestId, data } = action;

    return produce(state, (draftState) => {
      const index = draftState.requests.findIndex(
        (request) => request.id === requestId
      );

      const dataIndex = draftState.requests[index].data.findIndex(
        (d) => d.id === data.id
      );

      if (index >= 0 && dataIndex >= 0) {
        draftState.requests[index].data[dataIndex] = data;
      }
    });
  }

  if (type === "REMOVE_BODY_DATA") {
    const { requestId, id } = action;

    return produce(state, (draftState) => {
      const index = draftState.requests.findIndex(
        (request) => request.id === requestId
      );

      const dataIndex = draftState.requests[index].data.findIndex(
        (d) => d.id === id
      );

      if (index >= 0 && dataIndex >= 0) {
        draftState.requests[index].data.splice(dataIndex, 1);
      }
    });
  }

  throw new Error("Called reducer without supported type.");
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHost = (host) => dispatch({ type: "UPDATE_HOST", host });

  const addRequest = (method) => dispatch({ type: "NEW_REQUEST", method });
  const updateRequest = (request) =>
    dispatch({ type: "UPDATE_REQUEST", request });
  const removeRequest = (request) =>
    dispatch({ type: "REMOVE_REQUEST", request });

  const addBodyData = (id) => dispatch({ type: "ADD_BODY_DATA", id });
  const updateBodyData = (requestId, data) =>
    dispatch({ type: "UPDATE_BODY_DATA", requestId, data });
  const removeBodyData = (requestId, id) =>
    dispatch({ type: "REMOVE_BODY_DATA", requestId, id });

  return {
    updateHost,
    addRequest,
    updateRequest,
    removeRequest,
    addBodyData,
    updateBodyData,
    removeBodyData,
    state,
  };
};
