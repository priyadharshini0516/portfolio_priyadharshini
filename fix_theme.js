import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // In my previous script:
    // sandal -> charcoal (This made the light bg dark)
    // brown -> lime (This made the dark bg light)
    
    // We want to restore the contrast:
    // The previously 'sandal' elements should be 'lime'
    // The previously 'brown' elements should be 'charcoal'
    
    // So current 'charcoal' -> 'lime'
    // current 'lime' -> 'charcoal'
    
    // Safe swap:
    content = content.replace(/charcoal/g, 'TEMP_COLOR');
    content = content.replace(/lime/g, 'charcoal');
    content = content.replace(/TEMP_COLOR/g, 'lime');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
});
