import axios from "axios";

const baseUrl='https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures';

export  const flight_Api=async()=>{
    const {data}=await axios.get((baseUrl),{
        headers: {
            'X-RapidAPI-Key': 'a6157937fcmsh27302894111a0c2p1503adjsn49557816bd02',
            'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
          },                 
    });

    return data;    
  }