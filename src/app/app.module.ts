import { counterReducer } from './store/counter/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraionFormComponent } from './components/registraion-form/registraion-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CounterNgrxComponent } from './components/counter-ngrx/counter-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { AsyncJsComponent } from './components/async-js/async-js.component';

@NgModule({
  declarations: [AppComponent, RegistraionFormComponent, CounterNgrxComponent, AsyncJsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ counter : counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
