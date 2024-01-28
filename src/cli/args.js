import { argv } from 'node:process';

const parseArgs = () => {
   argv.forEach((val, index) => {
    if(index == 2) {
        console.log(`propName is ${val}`);
    } else if(index > 2){
        console.log(`prop${index-1}Mame is ${val}`);
    }
   })
};

parseArgs();