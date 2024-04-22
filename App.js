
const apikey = "df050ed9bcbf4eb5937135223242204";
const apiUrl = "http://api.weatherapi.com/v1/current.json"; 




const  boton = document.getElementById('serch').addEventListener('click', function(){


     


    async function check(){
        const city = document.getElementById('city').value;
        const response = await fetch(apiUrl + `?key=${apikey}`+ `&q=${city}`);
        console.log(response);
        var data = await response.json();
        var temp = data.current.temp_c;
        console.log(data)

         

        document.getElementById('city-tittle').innerHTML = data.location.name ;
        document.getElementById('temperature').innerHTML = data.current.temp_c + "°C";
        document.getElementById('humedad-info').innerHTML = data.current.humidity + "%";
        document.getElementById('uva').innerHTML = "Uv "+ data.current.uv;
        document.getElementById('wind-inf').innerHTML =  data.current.wind_kph + "Kph";
        document.getElementById('win').innerHTML =  data.current.precip_mm + "mm";
        

        if(parseInt(data.current.temp_c) <  15){
         document.getElementById('img').src = "./img/snowy.png";
         document.getElementById('Card').style.background = "linear-gradient(to top, rgba(215, 48, 193, 0.74),#2e99e0d6)";
         console.log(img);
        }
        if(parseInt(data.current.temp_c) <  15 && parseInt(data.current.is_day) == 0 ){
            document.getElementById('img').src = "./img/night.png";
            document.getElementById('Card').style.background = "linear-gradient(to top, rgba(215, 48, 193, 0.74),#2e99e0d6)";
            console.log(img);
           }
        if(parseInt(data.current.temp_c) >  26){
            document.getElementById('img').src = "./img/sun (1).png";
            document.getElementById('Card').style.background = "linear-gradient(to top,rgba(239, 200, 44, 0.864),#ff5b0fd0)"; 
        }
        if(parseInt(data.current.temp_c) > 15 && parseInt(data.current.temp_c) < 25 ){
            document.getElementById('img').src = "./img/cloudy.png";
            document.getElementById('Card').style.background = "linear-gradient(to top,rgba(147, 145, 145, 0.864),rgba(247, 240, 240, 0.908))";  
        }
        if(parseInt( data.current.precip_mm) >  100 ){
            document.getElementById('img').src = "./img/rainy.png";
            document.getElementById('Card').style.background = "linear-gradient(to top,rgba(80, 86, 255, 0.864),#bdbdbdd0)"; 
        }
        if(parseInt( data.current.is_day) ==  0 && parseInt(data.current.temp_c) >  15 ){
            document.getElementById('img').src = "./img/night.png";
            document.getElementById('Card').style.background = "linear-gradient(to bottom,rgb(40, 40, 40),#4618a2)";  
        }

    }
    check()

    
})

