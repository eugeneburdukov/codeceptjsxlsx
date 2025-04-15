Feature('sheets');

//npx codeceptjs gh - create helper
//npm install xlsx - install package

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
    const data = sheetReader.readXlsFile('./data/file_example_XLS_10.xls');
    const numberOfRows = data.length;
    console.log('All Column names:', numberOfRows);

    // Generate a random index between 0 and numberOfRows - 1 (inclusive)
    const randomIndex = sheetReader.pickRandomIndex('./data/file_example_XLS_10.xls');
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

    console.log(firstName + " " + gender + " " + age + " " + date);

}).tag('readxlx');