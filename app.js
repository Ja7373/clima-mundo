const axios = require('axios');
const querystring = require('querystring');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

// const instance = axios.create({
//     baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com',
//     timeout: 1000,
//     headers: {
//         'x-rapidapi-key': '3268dbad37mshd855fc700498d37p1aaef4jsn555734291257',
//         'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
//         'useQueryString': true
//     }
// });

// instance.get()
//     .then((result) => {
//         console.log(resp);
//     }).catch((err) => {
//         console.log('Error!!!!:', err.response.status);
//     });

clima.getClima(argv.direccion).then((resp) => {
    console.log('Temperatura: ', resp);
}).catch((err) => {
    console.log('error:', err.code);
})