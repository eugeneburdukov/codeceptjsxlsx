const Helper = require('@codeceptjs/helper');
const XLSX = require('xlsx');
const path = require('path');

class SheetReader extends Helper {
  /**
   * Reads and parses the first sheet of an XLS/XLSX file
   * @param {string} filePath - Path to the Excel file
   * @returns {Array<Object>} - Parsed data as an array of objects
   */
  readXlsFile(filePath) {
    const absolutePath = path.resolve(filePath);
    const workbook = XLSX.readFile(absolutePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  }

  /**
   * Reads and parses a specific sheet by name
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Name of the sheet to parse
   * @returns {Array<Object>}
   */
  readSheet(filePath, sheetName) {
    const absolutePath = path.resolve(filePath);
    const workbook = XLSX.readFile(absolutePath);
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  }

  /**
   * Picks a random index from the first sheet
   * @param {string} filePath
   * @returns {number}
   */
  pickRandomIndex(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return Math.floor(Math.random() * data.length);
  }

  /**
   * Picks a random index from a specific sheet
   * @param {string} filePath
   * @param {string} sheetName
   * @returns {number}
   */
  pickRandomIndexFromSheet(filePath, sheetName) {
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return Math.floor(Math.random() * data.length);
  }
}

module.exports = SheetReader;
