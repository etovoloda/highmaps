import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  constructor(private http: HttpClient) {
  }

  loadMapData() {
    return this.http.get('./assets/data.json');
  }
}
