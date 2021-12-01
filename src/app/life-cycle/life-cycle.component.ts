/*
 * @Author: Mukti
 * @Date: 2021-11-23 15:38:30
 * @LastEditTime: 2021-11-29 14:55:18
 * @LastEditors: Mukti
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.less']
})
export class LifeCycleComponent implements OnInit {

  @Input() num: any;
  @Input() list: any;
  // num = 0;
  obj = {
    a: 1,
  };
  constructor() {
    console.log(this.num);
   }


  ngOnChanges(): void {
    console.log('ngOnChanges')
  } //在输入属性 (input)/输出属性 (output)的绑定值发生变化时调用。
  
  ngOnInit(): void {
    // console.log('ngOnInit')
  }
  
  // ngDoCheck(): void {
  //   console.log('ngDoCheck')
  // } // - 开发者自定义变更检测。
  
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit')
  // } // - 在组件内容初始化后调用。
  
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked')
  // } // - 在组件内容每次检查后调用。
  
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit')
  // } // - 在组件视图初始化后调用。
  
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked')
  // } // - 在组件视图每次检查后调用。
  
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy')
  // } // - 在指令销毁前调用。



}
