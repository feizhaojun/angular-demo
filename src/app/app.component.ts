/*
 * @Author: Mukti
 * @Date: 2021-11-15 18:09:04
 * @LastEditTime: 2021-11-24 14:15:46
 * @LastEditors: Mukti
 */
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  count = 0;
  checkedStatus = false;
  title = 'angular-demo';
  test = "Mukti";

  @ViewChild('testview')
  testview!: ElementRef<any>;

  t() {
    console.log('test'); 
  }
  testLife() {
    this.count++;
  }
  change(event:any) {
    this.testview.nativeElement.checked = false;
  }
}
