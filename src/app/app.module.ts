/*
 * @Author: Mukti
 * @Date: 2021-11-15 18:09:04
 * @LastEditTime: 2021-12-09 20:10:06
 * @LastEditors: Mukti
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, UserListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
