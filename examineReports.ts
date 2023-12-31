import { xml2json } from "xml-js";
import fs from "node:fs";

const getAverageTestCaseTimes = (
  fileContents: Map<string, any>
): Map<string, number> => {
  // jest:   testsuites -> testsuite -> testcase x3
  // vitest: testsuites -> testsuite -> testcase x3
  // mocha:  testsuite -> testcase x3

  // key is `${framework} ${testType}`, value is array of arrays of times
  let aggregatedMap: Map<string, any[]> = new Map();
  for (const key of fileContents.keys()) {
    const split = key.replace("reports/", "").split("-");
    const testType = split[0];
    const framework = split[1];
    const currentXML = fileContents.get(key);
    let times: number[] = [];
    if (currentXML["testsuite"]) {
      // mocha reporter
      const testCases = currentXML["testsuite"]["testcase"];
      times = testCases.map((item) => Number(item["_attributes"].time));
    } else if (currentXML["testsuites"]) {
      // jest/vitest reporters
      const testCases = currentXML["testsuites"]["testsuite"]["testcase"];
      times = testCases.map((item) => Number(item["_attributes"].time));
    }

    const aggregationKey = `${framework} ${testType}`;
    const valueWithinAggMap = aggregatedMap.get(aggregationKey);
    if (valueWithinAggMap) {
      aggregatedMap.set(aggregationKey, [...valueWithinAggMap, times]);
    } else {
      aggregatedMap.set(aggregationKey, [times]);
    }
  }

  // map of the test type and the average time to execute
  let finalMap: Map<string, number> = new Map();
  for (const testType of aggregatedMap.entries()) {
    let avgTimes = testType[1].map((arr) => {
      let sum = 0;
      for (const time of arr) {
        sum += time;
      }
      return sum / arr.length;
    });

    let totalSum = 0;

    for (const time of avgTimes) {
      totalSum += time;
    }

    finalMap.set(testType[0], totalSum / avgTimes.length);
  }

  console.log(
    "Map of Test Times (Seconds) for Each Test's Execution Time (NOT including startup and teardown) ",
    finalMap
  );
  return finalMap;
};

const getAverageTestSuiteTimes = (
  fileContents: Map<string, any>
): Map<string, number> => {
  // jest:   testsuites -> testsuite -> testcase x3
  // vitest: testsuites -> testsuite -> testcase x3
  // mocha:  testsuite -> testcase x3

  // key is `${framework} ${testType}`, value is array of arrays of times
  let aggMap: Map<string, any[]> = new Map();
  for (const key of fileContents.keys()) {
    const split = key.replace("reports/", "").split("-");
    const testType = split[0];
    const framework = split[1];
    const currentXML = fileContents.get(key);
    let time: number = -1;
    if (currentXML["testsuite"]) {
      // mocha reporter
      const testSuite = currentXML["testsuite"];
      time = Number(testSuite["_attributes"].time);
    } else if (currentXML["testsuites"]) {
      // jest/vitest reporters
      const testSuite = currentXML["testsuites"]["testsuite"];
      time = Number(testSuite["_attributes"].time);
    }

    const aggregationKey = `${framework} ${testType}`;
    const valueWithinAggMap = aggMap.get(aggregationKey);
    if (valueWithinAggMap) {
      aggMap.set(aggregationKey, [...valueWithinAggMap, time]);
    } else {
      aggMap.set(aggregationKey, [time]);
    }
  }

  // map of the test type and the average time to execute
  let finalMap: Map<string, number> = new Map();
  for (const testType of aggMap.entries()) {
    let sum = 0;

    for (const time of testType[1]) {
      sum += time;
    }
    finalMap.set(testType[0], sum / testType[1].length);
  }

  console.log(
    "Map of Times (Seconds) for Each Test Suite's Execution (INCLUDING startup and teardown) ",
    finalMap
  );
  return finalMap;
};

const readReports = () => {
  const reportFiles = fs.readdirSync("./reports");

  // key is file name, value is file contents
  let fileContents: Map<string, any> = new Map();
  for (const file of reportFiles) {
    // I am well aware I am not handling errors gracefully, but this is being written fast ;D
    fileContents.set(
      `reports/${file}`,
      JSON.parse(
        xml2json(fs.readFileSync(`reports/${file}`).toString(), {
          compact: true,
        })
      )
    );
  }

  const averageTestCaseTimes = getAverageTestCaseTimes(fileContents);
  const averageTestSuiteTimes = getAverageTestSuiteTimes(fileContents);

  fs.writeFileSync(
    "test_case_results.txt",
    JSON.stringify(Object.fromEntries(averageTestCaseTimes), null, 2)
  );
  fs.writeFileSync(
    "test_suite_results.txt",
    JSON.stringify(Object.fromEntries(averageTestSuiteTimes), null, 2)
  );
};

readReports();
