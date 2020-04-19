const request = require('request');
const chalk =require('chalk');

const geoloc=(location,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(location)+'.json?access_token=pk.eyJ1IjoiYXJqdW5hZCIsImEiOiJjazkyYnV4eHowMzh2M2Vvd2oyamNmbjEzIn0.wwZagtirt-cAKuMawBdtHw'
request({url : url,json:true},(error,{body})=>{
    if(error){
        callback("unable to connect to server",undefined);
    }
    else if  (body.features.length===0) {
       callback(chalk.blue.bold('Unable to find the location',undefined));
	}
    
    else{
        callback(undefined,{
             long :body.features[0].center[0],
             lat :body.features[0].center[1],
             city:body.features[0].place_name     
    })
}

	})

}

module.exports=geoloc;