import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

/* Prodivers */
import { ProductService } from '../providers';

import { AppComponent } from './app.component';
import * as components from '../components';

export const firebaseConfig = {
    apiKey: "AIzaSyB4asBUlKaeZ_VdcYv4i_OHdfLVGSCgpGk",
    authDomain: "ngrx-products.firebaseapp.com",
    databaseURL: "https://ngrx-products.firebaseio.com",
    projectId: "ngrx-products",
    storageBucket: "ngrx-products.appspot.com",
    messagingSenderId: "171279934350"
}

@NgModule({
  declarations: [
    AppComponent,
    components.ProductListComponent,
    components.AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
