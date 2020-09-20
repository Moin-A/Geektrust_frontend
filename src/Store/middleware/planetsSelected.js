import http from "../../Service/httpService";
import * as actions from "../api";
import * as Actions from "../Slice/Destination";
import Normalize from "../../Service/Normalize";

const planetsSelected = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  next(action);
  const { url, method, data } = action.payload;
  try {
    const response = await http.request({
      url,
      method,
      data,
    });
    const NormalisedData = Normalize(response.data, action.payload.name);
    dispatch(Actions.CallSuccess(NormalisedData));
  } catch (error) {
    dispatch(actions.apiCallFailed(error));
  }
};

export default api;
