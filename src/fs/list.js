import { readdir, access } from 'node:fs';

const list = async () => {
    access('fs/files', err => {
        if(err) {
            console.log('FS operation failed');
        } else {
            readdir('fs/files', {recursive: true}, (err, files) => {
                if(err) {
                    console.log('FS operation failed');
                } else {
                    files.forEach(file => {
                        console.log(file)
                    });
                }
           })
        }
    })
    
};

await list();