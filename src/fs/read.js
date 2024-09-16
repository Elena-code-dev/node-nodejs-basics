import { readFile } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const _dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
   readFile(`${_dirname}/files/fileToRead.txt`, (err, data) => {
    if(err) {
        console.log('FS operation failed');
    } else {
        console.log(data.toString());
    }
   })
};

await read();