import { xml2json } from "xml-js";
import fs from "node:fs";

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
  console.log("Agg: ", aggregatedMap);

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

  console.log("Final map: ", finalMap);
};

readReports();
