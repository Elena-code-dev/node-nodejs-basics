import fs from 'node:fs';

const remove = async () => {
   fs.unlink('fs/files/fileToRemove.txt', err => {
    if(err) {
        console.log('FS operation failed');
    }
   })
};

await remove();