/*
 * @Author: Mukti
 * @Date: 2021-11-15 18:09:04
 * @LastEditTime: 2021-12-10 18:27:22
 * @LastEditors: Mukti
 */
import { Component, VERSION, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  testNum: number = 0;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    
  }
  
}
