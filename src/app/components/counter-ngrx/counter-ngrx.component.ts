import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from '../../store/app.state';
import { selectCount } from '../../store/counter/counter.selector';
import { decrement, increment, reset } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrl: './counter-ngrx.component.scss',
})
export class CounterNgrxComponent implements OnInit {
  public count: Observable<number> | undefined;
  // public count: any;

  constructor(private store: Store<appState>) {
    this.count = this.store.select(selectCount);
    console.log('this.counts', this.count);
  }

  ngOnInit() {
    // this.count = this.store.select(selectCount);
    // console.log('this.counts', this.count);
  }

  doIncrement(){
    this.store.dispatch(increment())
  }

  doDecrement(){
   this.store.dispatch(decrement())
  }

  doReset(){
   this.store.dispatch(reset())
  }

}
