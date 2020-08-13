const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`La base introducida(${base}) no es un número`);
            return;
        }

        let data = '';

        for (let index = 0; index < 11; index++) {

            data += `${base} * ${index} = ${base * index}\n`;

        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla_${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo
}
