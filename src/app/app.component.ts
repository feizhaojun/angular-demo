/*
 * @Author: Mukti
 * @Date: 2021-11-15 18:09:04
 * @LastEditTime: 2021-12-10 18:28:41
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
    
    // let obs1$ = this.http.get('https://feizhaojun.com/demo/api/foo/');
    // let obs2$ = this.http.get('https://feizhaojun.com/demo/api/bar/');

    // forkJoin([obs1$, obs2$]).subscribe(console.log);
    setTimeout(() => {
      // this.users2 = this.users2.concat([{
      //   name: 'new',
      //   avatar: 'https://feizhaojun.com/img/avatar-default.jpg'
      // }]);
      this.users1 = this.users1.concat(groupA);
    });
    setTimeout(() => {
      this.users2 = this.users2.concat(groupA);
    });
    setTimeout(() => {
      this.users3 = this.users3.concat(groupA);
      this.users3 = this.users3.concat(groupA);
      this.users3 = this.users3.concat(groupA);this.cdr.detectChanges();
      // let users = this.users.concat(groupA);
      // this.users = users.concat(groupA);
      // this.users = this.users.concat(groupA);
    });
    // setTimeout(() => {});
    // setTimeout(() => {
    // });



// let obs1$ = this.http.get('https://feizhaojun.com/demo/api/foo/');
// let obs2$ = this.http.get('https://feizhaojun.com/demo/api/bar/');

// zip([
//   this.http.get('https://feizhaojun.com/demo/api/foo/'),
//   this.http.get('https://feizhaojun.com/demo/api/bar/'),
// ])
//   .pipe(map(([res1, res2]) => ({ res1, res2 })))
//   .subscribe((res) => {
//     console.log(res);
//     this.users.push(res.res1, res.res2);
//     // this.users = res;
//   });
// obs1$.pipe(sample(obs2$)).subscribe((res) => {
//   console.log(res);
//   // this.users.push(res.res1, res.res2);
//   // this.users = res;
// });
// this.http.get('https://feizhaojun.com/demo/api/foo/').subscribe((res) => {
//   // console.log(res);
//   this.users.push(res);
// });
// this.http.get('https://feizhaojun.com/demo/api/bar/').subscribe((res) => {
//   // console.log(res);
//   this.users.push(res);
// });
// setTimeout(() => {});
// let obs$ = this.http.get('https://feizhaojun.com/demo/api/bar/');
// this.http
//   .get('https://feizhaojun.com/demo/api/foo/')
//   .pipe(
//     mergeMap((res) => {
//       // console.log(res);
//       // this.users.push(res);
//       return obs$.pipe(map((res2) => [res, res2]));
//     })
//   )
//   .pipe(observeOn(animationFrameScheduler))
//   .subscribe((res) => {
//     console.log(res);
//     // this.users = res;
//   });
// .get('https://gitee.com/api/v5/repos/sentsin/layui/contributors')
// .pipe(
//   map((el: Array<any>) => {
//     return el.filter((el, i) => i === 9);
//   })
// )
  }
  
}
