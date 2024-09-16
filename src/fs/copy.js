import { mkdir, readdir, copyFile, access } from 'node:fs';

const copy = async () => {

    access('fs/files', (err) => {
        if(err) {
            console.log('FS operation failed')
        } else {
            readdir('fs/files', {recursive: true}, (err, files) => {
                if(err) {
                    console.log('FS operation failed');
                } else {
                    mkdir('fs/files_copy', (err) => {
                        if(err) {
                            console.log('FS operation failed'); 
                        }
                    })
                    files.forEach(file => {   
                        copyFile(`fs/files/${file}`, `fs/files_copy/${file}`, (err) => {
                            if(err) {
                                console.log('FS operation failed'); 
                            }
                        })
                    })
                }
            });
        }
    });
};

await copy();
