const path = require("path");
const filepath =path.join("foleder","student","children","book");

const pathdata = path.parse(filepath);
const pathresolve = path.resolve(filepath);
const pathextname = path.extname(filepath);
const pathbasename = path.resolve(filepath);
const pathdirname = path.dirname(filepath);
const pathsep = path.sep;

console.log({pathdata,pathresolve,pathextname,pathbasename,pathdirname,pathsep});
