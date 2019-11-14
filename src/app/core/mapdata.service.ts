import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const originalMap: Array<any> = [
  ['ru-3637', 0],
  ['ru-ck', 1],
  ['ru-ar', 1],
  ['ru-nn', 1],
  ['ru-yn', 1],
  ['ru-ky', 1],
  ['ru-sk', 1],
  ['ru-kh', 1],
  ['ru-sl', 1],
  ['ru-ka', 1],
  ['ru-kt', 1],
  ['ru-2510', 1],
  ['ru-rz', 1],
  ['ru-sa', 1],
  ['ru-ul', 1],
  ['ru-om', 1],
  ['ru-ns', 1],
  ['ru-mm', 1],
  ['ru-ln', 1],
  ['ru-sp', 1],
  ['ru-ki', 1],
  ['ru-kc', 1],
  ['ru-in', 1],
  ['ru-kb', 1],
  ['ru-no', 1],
  ['ru-st', 1],
  ['ru-sm', 1],
  ['ru-ps', 1],
  ['ru-tv', 1],
  ['ru-vo', 1],
  ['ru-iv', 1],
  ['ru-ys', 1],
  ['ru-kg', 1],
  ['ru-br', 1],
  ['ru-ks', 1],
  ['ru-lp', 1],
  ['ru-ms', 1],
  ['ru-ol', 1],
  ['ru-nz', 1],
  ['ru-pz', 1],
  ['ru-vl', 1],
  ['ru-vr', 1],
  ['ru-ko', 1],
  ['ru-sv', 1],
  ['ru-bk', 1],
  ['ru-ud', 1],
  ['ru-mr', 1],
  ['ru-cv', 1],
  ['ru-cl', 1],
  ['ru-ob', 1],
  ['ru-sr', 1],
  ['ru-tt', 1],
  ['ru-to', 1],
  ['ru-ty', 1],
  ['ru-ga', 1],
  ['ru-kk', 1],
  ['ru-cn', 1],
  ['ru-kl', 1],
  ['ru-da', 1],
  ['ru-ro', 1],
  ['ru-bl', 1],
  ['ru-tu', 1],
  ['ru-ir', 1],
  ['ru-ct', 1],
  ['ru-yv', 1],
  ['ru-am', 1],
  ['ru-tb', 1],
  ['ru-tl', 1],
  ['ru-ng', 1],
  ['ru-vg', 1],
  ['ru-kv', 1],
  ['ru-me', 1],
  ['ru-ke', 1],
  ['ru-as', 1],
  ['ru-pr', 1],
  ['ru-mg', 1],
  ['ru-bu', 1],
  ['ru-kn', 1],
  ['ru-kd', 1],
  ['ru-ku', 1],
  ['ru-al', 1],
  ['ru-km', 1],
  ['ru-pe', 1],
  ['ru-ad', 1]
];


@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  constructor(private http: HttpClient) {
  }

  originalData() {
    return originalMap;
  }

  loadMapData() {
    return this.http.get('./assets/data.json');
  }
}
