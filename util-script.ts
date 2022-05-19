import * as fs from "fs"
import * as path from "path"
const pa = path.join(__dirname, "words10-000.txt")

const isEmpty = (str: string) => str.length === 0;
const notEmpty = (str: string) => !isEmpty(str)
const isPair = (arr: string[]): arr is [string, string] => {
  const isArray = Array.isArray(arr);
  const len2 = arr.length === 2;

  return true;
}

const toPair = (arr: string[]) => arr;
const file = fs.readFileSync(pa);
const lines = file.toString().split("\n")
const nonEmptyLines = lines.filter(notEmpty).map(str => str.trim())
const pairs = nonEmptyLines.map(str => str.split(" "))

const p = pairs.map((items) => {
  const count = parseInt(items[0]);
  const word = items[1];
  if(typeof count !== "number" || count < 10) {
    throw Error()
  }
  const mapped = {count, word}
  return mapped;
})
console.log(p.length)
console.log(p[100])
const outPath = path.join(__dirname, "data.ts")
if(fs.existsSync(outPath)) {
  fs.rmSync(outPath);
}
fs.writeFileSync(outPath, JSON.stringify(p))
