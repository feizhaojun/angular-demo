/*
 * @Author: Mukti
 * @Date: 2021-12-09 20:09:03
 * @LastEditTime: 2021-12-10 14:05:23
 * @LastEditors: Mukti
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less'],
})
export class UserListComponent implements OnInit {
  // @Input() users: Array<any> = [];
  @Output() ev = new EventEmitter<boolean>();
  private count: number = 1;

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    // console.log(this.count++);
  }
  handleClick() {
    this.ev.emit();
  }
}
