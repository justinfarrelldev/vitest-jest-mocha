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

  for (const key of fileContents.keys()) {
    const currentXML = fileContents.get(key);
    if (currentXML["testsuite"]) {
      // mocha
      const testCases = currentXML["testsuite"]["testcase"];
      const times = testCases.map((item) => item["_attributes"].time);
      console.log("MOCHA: ", times);
    } else if (currentXML["testsuites"]) {
      // jest/vitest
      const testCases = currentXML["testsuites"]["testsuite"]["testcase"];
      const times = testCases.map((item) => item["_attributes"].time);
      console.log("Jest / Vitest: ", times);
    }
  }
};

readReports();
