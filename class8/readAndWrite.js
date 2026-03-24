import fs from 'fs';
const readFileSync = (file) => {
    try {
        const data = fs.readFileSync(file, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error.message);
    }       
}
readFileSync