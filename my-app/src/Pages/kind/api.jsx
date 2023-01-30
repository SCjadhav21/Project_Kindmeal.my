import axios from "axios";

export const getKind = (params = {}) => {
  return axios.get(`https://kindmeal-db.onrender.com/address`, {
    params: {
      _page: params.page,
      _limit: params.limit,
        q:params.find || params.country}
    })
   
};
