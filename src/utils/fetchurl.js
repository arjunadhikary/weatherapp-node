const request = require('request');
const getUrl = (lat,long,callback) => {
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily?'+'&lat='+lat+'&lon='+long+'&key=4c14524d2e594d8d8e8f84c371928584'
    request({url,json:true},(error,{body})=>{
        if (error) {
            callback('Unable To Connect',undefined);
        }
       else if (body.error) {
         callback('Unable To Find Location',undefined);

        }
         else{
         callback(undefined,
           `The Current Temperature is ±`+ body.data[15].temp +` degree`+` AND There is ±`+ body.data[3].clouds+`% chance of Rainning`)
         };
     
        });
    };

    module.exports=getUrl