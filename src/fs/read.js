import fs from 'fs';

const read = async () => {
    try {
        let text = await fs.promises.readFile('files/fileToRead.txt', 'utf8')
    console.log(text)
    } catch (error) {
        console.log('FS operation failed')
    }
};

await read();
