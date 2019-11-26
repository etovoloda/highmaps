import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import {MapDataService} from '../../../core/mapdata.service';

declare let require: any;
const mapRussia = require('@highcharts/map-collection/countries/ru/ru-all.geo.json');

const mapData: Array<any> = [];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  highCharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      map: mapRussia,
      animation: false
    },
    title: {
      text: 'Карта Российской Федерации'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [{
      name: 'Нагрузка',
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: mapData,
    } as Highcharts.SeriesMapOptions]
  };

  constructor(private getMap: MapDataService ) {}

  ngOnInit() {
    this.initMap(this.getMap.originalData());
    // this.loadData();
    // this component needs upgrade
  }

  initMap(map) {
    this.chartOptions.series[0]['data'] = map;
    this.highCharts.mapChart('container', this.chartOptions);
  }

  loadData() {
    return this.getMap.loadMapData()
      .subscribe(data => {
      setTimeout(() => {
        this.initMap(data['data']);
      }, 2000);
    });
  }
}
