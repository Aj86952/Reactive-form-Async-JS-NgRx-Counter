import { Component } from '@angular/core';

@Component({
  selector: 'app-async-js',
  templateUrl: './async-js.component.html',
  styleUrl: './async-js.component.scss',
})
export class AsyncJsComponent {
  ngOnInit() {
    this.getCallbackData(1, () => {
      this.getCallbackData(2, () => {
        this.getCallbackData(3);
      });
    });

    // ==================================

    // this.getPromiseData(1)
    //   .then((res) => {
    //     return this.getPromiseData(2);
    //   })
    //   .then((res2) => {
    //     return this.getPromiseData(3);
    //   })
    //   .then((res3) => {
    //     console.log('getPromiseData res3', res3);
    //   })
    //   .catch((err) => {
    //     console.log('getPromiseData err', err);
    //   });

      // ===================================

     this.getAsyncAwaitData();
  }

  getCallbackData(data, callback = null) {
    // function sum(a, b) {
    //   return a + b;
    // }
    // function operation(x, y, callback) {
    //   return callback(x, y);
    // }
    // console.log('callback', operation(3, 7, sum));
    // setTimeout(() => {
    //   console.log('getData', data);
    //   if (callback) {
    //     callback();
    //   }
    // }, 2000);
  }

  getPromiseData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log('getPromiseData', data);
        console.log('getAsyncAwaitData', data);
        resolve(data);
      }, 2000);
    });
  }

  // getPromiseData(data) {
  //   setTimeout(() => {
  //     console.log('getAsyncAwaitData', data);
  //   }, 2000);
  // }

  async getAsyncAwaitData(){
    await this.getPromiseData(1);
    await this.getPromiseData(2);
    await this.getPromiseData(3);
  }

  // (async function(){
  //   await this.getPromiseData(1);
  //   await this.getPromiseData(2);
  //   await this.getPromiseData(3);
  // })();
}
