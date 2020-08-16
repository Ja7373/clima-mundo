const axios = require('axios');

const getClima = async(lugar) => {
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=1075c695b88dfdfd249874d1cb8d9e68&units=metric`,
    });

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=1075c695b88dfdfd249874d1cb8d9e68&units=metric`);

    //const resp = await instance.get();

    // console.log('datos respuesta: ', resp.data.main.temp);
    return resp.data.main.temp;
};

module.exports = {
    getClima,
}