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

  console.log("fileContents: ", fileContents);
};

readReports();
