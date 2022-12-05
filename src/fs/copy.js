import fs from 'fs';

const copy = async () => {
    fs.copy('files', 'files_copy')
};

await copy();
