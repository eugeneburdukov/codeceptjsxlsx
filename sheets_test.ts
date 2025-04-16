Feature('sheets');

function excelDateToJSDate(serial) {
  const utcDays = Math.floor(serial - 25569); // 25569 is the Excel offset for Unix epoch
  const utcValue = utcDays * 86400; // seconds in a day
  const date = new Date(utcValue * 1000); // convert to JS Date in milliseconds

  // Format as MM/DD/YYYY
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth is 0-based
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${month}/${day}/${year}`;
}


//npx codeceptjs gh - create helper
//npm install xlsx - install package
// Convert Excel sheet to JSON and automatically parse Excel date serials into JavaScript Date objects.
// Without `cellDates: true`, Excel dates (e.g., "Jan 1, 1982") are returned as numeric serials (e.g., 29952).
//  return XLSX.utils.sheet_to_json(worksheet, { cellDates: true }); // ✅


// Scenario('Read Excel file', async ({ I }) => {
//     const sheetReader = codeceptjs.container.helpers('SheetReader');
//     const data = sheetReader.readXlsFile('./data/file_example_XLS_10.xls');

//     console.log('Parsed Excel data:', data); // 👈 THIS logs everything to your terminal

//     for (const row of data) {
//         console.log('Row:', row); // 👈 Log each row individually
//         I.say(`Read row: ${JSON.stringify(row)}`);
//     }
// });

Scenario('Read certain rows', async ({ I }) => {
    const sheetReader = codeceptjs.container.helpers('SheetReader');
    const data = sheetReader.readSheet('./data/test_people_by_region.xlsx', 'AB');
    const numberOfRows = data.length;
    console.log('Number of rows in the document - tab:', numberOfRows);

    // Generate a random index between 0 and numberOfRows - 1 (inclusive)
    const randomIndex = sheetReader.pickRandomIndexFromSheet('./data/test_people_by_region.xlsx', 'AB');
    console.log('Show random index - random row number from helper: ', randomIndex);

    const columnNames = Object.keys(data[0]);
    console.log('All Column names:', columnNames);
    console.log('Certain Column name', columnNames[1]);

    // Line 7 in Excel means index 6 (because 1st row is index 0)
    const row = data[randomIndex];

    // Print only the desired fields
    let firstName = row['First Name'];
    let gender = row['Gender'];
    let age = row['Age'];
    let date = row['Date'];
    let id = row['Date'];

    console.log(firstName + " " + gender + " " + age + " " + date + " " + id);

}).tag('readxlx');
