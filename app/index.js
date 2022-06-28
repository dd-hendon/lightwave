const { devices } = require("../data/devices");
const { comparisonPeriod } = require("../data/comparisonPeriod");
const { calculateUsage } = require("./calculateUsage");

async function createTable() {
  const devicesWithUsages = [];

  for (i = 0; i < devices.length; i++) {
    const deviceUsage = await calculateUsage(devices[i], comparisonPeriod);
    devicesWithUsages.push(deviceUsage);
  }
  console.table(devicesWithUsages);
}

createTable();
