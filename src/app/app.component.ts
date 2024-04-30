import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './store/app.state';
import { selectCount } from './store/counter/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-practice';
  public count: Observable<number> | undefined;

  constructor(private store: Store<appState>) {
    // this.count = this.store.select(selectCount);
    // console.log('this.counts app', this.count);
  }

  ngOnInit() {
    this.count = this.store.select(selectCount);
    console.log('this.counts app', this.count);
  }
}
