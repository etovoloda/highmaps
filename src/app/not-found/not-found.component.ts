import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<p><b>Ошибка 404</b></p><p><a href="/login">Перейти на страницу входа</a></p>',
  styles: ['']
})
export class NotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
