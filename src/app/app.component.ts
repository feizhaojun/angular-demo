/*
 * @Author: Mukti
 * @Date: 2021-11-15 18:09:04
 * @LastEditTime: 2021-11-29 15:01:06
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
  list = ['1','2','3','4','5','6',];

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

  ngOnInit() {
setTimeout(() => {
  console.log('dddddd')
  this.list.forEach(el => {
    return el = Number(el) + 1 + 's';
  });
// this.list = ['1s','2a','3s'];
// this.list[1] = '2s';
},1000);
  }
}
