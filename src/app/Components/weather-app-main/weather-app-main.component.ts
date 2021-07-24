import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app-main',
  templateUrl: './weather-app-main.component.html',
  styleUrls: ['./weather-app-main.component.scss']
})
export class WeatherAppMainComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":-81.4065,"lat":41.6398},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":299.14,"feels_like":299.14,"temp_min":296.58,"temp_max":301.45,"pressure":1011,"humidity":58},"visibility":10000,"wind":{"speed":1.54,"deg":20},"clouds":{"all":40},"dt":1627072036,"sys":{"type":1,"id":4728,"country":"US","sunrise":1627035088,"sunset":1627087945},"timezone":-14400,"id":5176937,"name":"Willoughby","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData=data;
    let sunsetTime=new Date(this.WeatherData.sys.sunset *1000);
    this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
    let currentDate=new Date();
    this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime())
  }
}
