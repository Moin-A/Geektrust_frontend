import http from "../../Service/httpService";
import * as actions from "../api";
import * as Actions from "../Slice/Destination";
import Normalize from "../../Service/Normalize";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  next(action);
  const { url, method, data, headers } = action.payload;
  try {
    const response = await http.request({
      url,
      method,
      data,
      headers,
    });

    const NormalisedData = Normalize(response.data, action.payload.name);
    dispatch(Actions.CallSuccess(NormalisedData));
  } catch (error) {
    dispatch(actions.apiCallFailed(error));
  }
};

export default api;
