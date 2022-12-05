import fs from 'fs/promises';
import { constants } from 'fs';

const create = async () => {
    try {
        await fs.access('files/fresh.txt', constants.F_OK);
        console.log('FS operation failed')
    } catch { 
        fs.writeFile('files/fresh.txt', 'I am fresh and young');
    }
};

await create();