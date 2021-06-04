const fs = require('fs');
const path = require('path');

/**
 * @returns {string[]} files
 */
const getFiles = () => {
  let args;
  try {
    args = process.argv.slice(2);

    if (args.length > 2) {
      console.log('please only give 2 files');
      return [];
    } else if (args.length < 2) {
      console.log('please give 2 files');
      return [];
    }

    return args;
  } catch {
    console.log('No arguments given');
    return [];
  }
};

/**
 * @argument {string} fileName
 * @returns {string} fileContent
 */
const readFile = (fileName) => {
  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    return fileContent;
  } catch (error) {
    console.log('Error reading file', error);
  }
};

/**
 * @argument {string} fileContent
 * @argument {string} filePath
 */
const writeFile = (fileContent, filePath) => {
  try {
    fs.writeFileSync(filePath, fileContent);
  } catch (error) {
    console.log('Error writing file', error);
  }
};

/**
 * @argument {string} fileContent
 */
const changeColors = (fileContent) => {
  const hexRegex = /\b[0-9A-Fa-f]{6}\b/g;
  const hexCodes = fileContent.match(hexRegex);

  for (const hexCode of hexCodes) {
    const closestColorName = getClosestColor(hexCode);
    const closestColor = colors[closestColorName].slice(1);
    fileContent = fileContent.replace(hexCode, closestColor);
  }

  return fileContent;
};

/**
 * @argument {string} color
 * @argument {string} closestColor
 */
const getClosestColor = (color) => {
  const red = parseInt(color.substring(0, 2), 16);
  const green = parseInt(color.substring(2, 4), 16);
  const blue = parseInt(color.substring(4, 6), 16);

  let bestColor;
  let bestDist = Number.MAX_VALUE;
  for (const [colorName, hexString] of Object.entries(colors)) {
    const hexVal = hexString.slice(1);
    const currRed = parseInt(hexVal.substring(0, 2), 16);
    const currGreen = parseInt(hexVal.substring(2, 4), 16);
    const currBlue = parseInt(hexVal.substring(4, 6), 16);
    const dist = eDist([red, green, blue], [currRed, currGreen, currBlue]);

    if (dist < bestDist) {
      bestDist = dist;
      bestColor = colorName;
    }
  }

  return bestColor;
};

/**
 *
 * @param {number[]} color1
 * @param {number[]} color2
 */
const eDist = (color1, color2) => {
  let d = 0;

  for (let i = 0; i < 3; i++) {
    d += Math.pow(color1[i] - color2[i], 2);
  }

  return Math.sqrt(d);
};

const foreground = {
  fg0: '#ddc7a1',
  fg: '#d4be98',
  fg1: '#c5b18d',
  red: '#ea6962',
  orange: '#e78a4e',
  yellow: '#d8a657',
  green: '#a9b665',
  aqua: '#89b482',
  blue: '#7daea3',
  purple: '#d3869b',
  dimRed: '#b85651',
  dimOrange: '#bd6f3e',
  dimYellow: '#c18f41',
  dimGreen: '#8f9a52',
  dimAqua: '#72966c',
  dimBlue: '#68948a',
  dimPurple: '#ab6c7d',
};

const background = {
  bg0: '#101010',
  bg1: '#1c1c1c',
  bg: '#292828',
  bg2: '#32302f',
  bg3: '#383432',
  bg4: '#3c3836',
  bg5: '#45403d',
  bg6: '#504945',
  bg7: '#5a524c',
  bg8: '#665c54',
  bg9: '#7c6f64',
  grey0: '#7c6f64',
  grey: '#928374',
  grey2: '#a89984',
  shadow: '#00000070',
};

const colors = { ...foreground, ...background };

(() => {
  const fileNames = getFiles();
  const inputFile = path.join(__dirname, fileNames[0]);
  const outputFile = path.join(__dirname, fileNames[1]);

  const file = readFile(inputFile);

  const changedFile = changeColors(file);

  writeFile(changedFile, outputFile);
})();
