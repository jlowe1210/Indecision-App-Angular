import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OptionsListComponent } from './options-list/options-list.component';
import { OptionComponent } from './option/option.component';
import { ActionComponent } from './action/action.component';
import { AddoptionComponent } from './addoption/addoption.component';

import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsListComponent,
    OptionComponent,
    ActionComponent,
    AddoptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
