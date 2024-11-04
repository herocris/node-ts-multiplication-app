
import { yarg } from './config/plugins/args.plugin';


const {b:base, l:limit, s:showTable} = yarg;
let message: string = `
==============================
        Tabla del ${base}
==============================\n`;


for (let i = 1; i <= limit; i++) {
    message = message + `${base} X ${i} = ${base * i}\n`
}
if (showTable) {
    console.log(message);
}




