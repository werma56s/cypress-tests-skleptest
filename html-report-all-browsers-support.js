const fs = require('fs');
const path = require('path');
const glob = require('glob');

// List of browsers for which reports need to be generated
const browsers = ['chrome', 'firefox', 'edge']; // Add browsers as needed
const allReportsDir = 'cucumber_report_docker/all_reports/json'; // Directory to store all JSON files
const allJsonFiles = []; // Array to collect all JSON file paths

function getAllJSONFilesFormBrowsersToOnePlace() {
  // Create the 'all_reports/json' directory if it doesn't exist
  if (!fs.existsSync(allReportsDir)) {
    fs.mkdirSync(allReportsDir, { recursive: true });
  }

  // Collect the paths of all JSON files from different browsers
  browsers.forEach((browser) => {
    const jsonDir = `cucumber_report_docker/${browser}`; // Path to JSON files for this browser

    // Check if the folder exists
    if (!fs.existsSync(jsonDir)) {
      console.log(`Folder for ${browser} does not exist: ${jsonDir}`);
      return; // Skip this browser if the folder is missing
    }

    const jsonFiles = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));
    console.log(`Found ${jsonFiles.length} JSON files in ${jsonDir} for ${browser}`);

    jsonFiles.forEach(file => {
      // Create a new file name with the browser prefix
      const newFileName = `${browser}-${file}`;

      // Define the destination path
      const destinationPath = path.join(allReportsDir, newFileName);

      // Copy the file to the all_reports folder with the new name
      fs.copyFileSync(path.join(jsonDir, file), destinationPath);

      // Add the new file path to the allJsonFiles array
      allJsonFiles.push(destinationPath);
      console.log(`Copied data for ${file} to ${destinationPath}`);
    });
  });
}
//
//
const browserVersions = {
  'chrome': 129,
  'firefox': 131,
  'edge': 129
};
//  Function to add metadata to JSON files
function addMetadataToJSONFiles() {
  glob('cucumber_report_docker/all_reports/json/*.json', (err, files) => {
    if (err) {
      console.error("Error while gathering JSON files:", err);
      return;
    }

    files.forEach(file => {
      // read the JSON file
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }

        // Parsing the contents of a JSON file
        let jsonData;
        try {
          jsonData = JSON.parse(data);
        } catch (parseErr) {
          console.error(`Error parsing JSON in file ${file}:`, parseErr);
          return;
        }

        // Extracting the browser name from the file name (the part before the hyphen)
        const fileName = path.basename(file, '.json'); // With the .json extension
        const browser = fileName.split('-')[0]; // We extract the browser name in file name

        if (browsers.includes(browser)) {
          // Add metadata
          jsonData[0].metadata = {
            browser: {
              name: browser,
              version: browserVersions[browser] // Browser version
            },
            device: 'Docker Container',
            platform: {
              name: 'ubuntu',
              version: 'last'
            }
          };
          console.log(`jsonData:`, jsonData);
          // Save the updated JSON file
          fs.writeFile(file, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
              console.error(`Error writing file ${file}:`, writeErr);
            } else {
              console.log(`Metadata added to: ${file}`);
            }
          });
        }
      });
    });
  });
}

module.exports = { getAllJSONFilesFormBrowsersToOnePlace, addMetadataToJSONFiles };