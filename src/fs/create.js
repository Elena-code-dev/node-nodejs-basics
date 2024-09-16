import { writeFile, access} from 'node:fs';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {

    access(`${_dirname}/files/fresh.txt`, (err) =>  {
        if(err) {
            writeFile(`${_dirname}/files/fresh.txt`, 'I am fresh and young', (err) => (err))
        } else {
            console.log('FS operation failed');
        }
    })
};

await create();