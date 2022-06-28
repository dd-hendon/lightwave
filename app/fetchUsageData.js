const axios = require("axios");
const { tokens } = require("../auth.json");

const accessToken = tokens.access_token;
axios.defaults.headers.common["Authorization"] = "bearer " + accessToken;
axios.defaults.baseURL = "https://publicapi.lightwaverf.com/v1/data/";

exports.fetchUsageData = async function (deviceId, featureId, usageDate) {
  try {
    const { data } = await axios.get(`${deviceId}/${featureId}`, {
      params: { end: usageDate, limit: 1 },
    });
    return data[0].data[0];
  } catch (error) {
    console.log(error);
  }
};
