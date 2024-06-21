import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/Test.txt';

//basename()
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
console.log(`${__fileName} ${__dirName}`);

//join()
const filePath2 = path.join(__dirName, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirName, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);
