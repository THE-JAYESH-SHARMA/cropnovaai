    require('dotenv').config();
    let apikkey;
    function getApiKeys() {
        
        const apiKey1 = process.env.API_KEY_1;
        const apiKey2 = process.env.API_KEY_2;
        const apiKey3 = process.env.API_KEY_3;
        const apiKey4 = process.env.API_KEY_4;
        const apiKey5 = process.env.API_KEY_5;
        const apiKey6 = process.env.API_KEY_6;
        const apiKey7 = process.env.API_KEY_7;
        const apiKey8 = process.env.API_KEY_8;
        const apiKey9 = process.env.API_KEY_9;
        const apiKey10 = process.env.API_KEY_10;
        return apikey+localStorage.getItem('API_KEY')
        localStorage.setItem('API_KEY', apikkey+1 );
    }
console.log(getApiKeys())
console.log(getApiKeys())
    console.log(getApiKeys())

