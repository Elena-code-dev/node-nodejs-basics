import fs from 'node:fs';

const rename = async () => {
    fs.rename('fs/files/wrongFilename.txt', 'fs/files/properFilename.md', err => {
        if(err) {
            console.log('FS operation failed');
        } 
    })
};

await rename();