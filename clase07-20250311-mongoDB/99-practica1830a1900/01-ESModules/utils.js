import {fileURLToPath} from 'url';
import { dirname } from 'path';

console.log(import.meta.url)
const __filename = fileURLToPath(import.meta.url);
const __dirname2 = dirname(__filename);

export default __dirname2;