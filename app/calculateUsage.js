const { fetchUsageData } = require("./fetchUsageData");

exports.calculateUsage = async function (device, comparisonPeriod) {
  const { deviceId, featureId, name } = device;
  const { start, end } = comparisonPeriod;

  const startDate = "Usage on " + new Date(start).toLocaleDateString();
  const endDate = "Usage on " + new Date(end).toLocaleDateString();

  const startData = fetchUsageData(deviceId, featureId, start);
  const endData = fetchUsageData(deviceId, featureId, end);
  const [startValue, endValue] = await Promise.all([startData, endData]);

  const deviceUsage = {
    Device: name,
    [startDate]: startValue.value,
    [endDate]: endValue.value,
    "Energy usage for period": endValue.value - startValue.value,
  };
  return deviceUsage;
};
