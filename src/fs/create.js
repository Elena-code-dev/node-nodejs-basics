import { writeFile, access} from 'node:fs';

const create = async () => {

    access('fs/files/fresh.txt', (err) =>  {
        if(err) {
            writeFile('fs/files/fresh.txt', 'I am fresh and young', (err) => (err))
        } else {
            console.log('FS operation failed');
        }
    })
};

await create();