class weatherAPI{
    constructor(){
        this.baseURL="https://api.openweathermap.org/data/2.5/weather";
        this.apiKey= "8ccf13eecfab965bd783f3b016987e8d";
    }
   async getWeatherInfo(cityName) {
       const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=eg`)
       const data = await response.json();     
        return data
    }
}