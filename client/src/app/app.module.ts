import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserResultComponent } from './components/user-result/user-result.component';

import { RendaUserService } from './services/renda-user.service';
import { UserModalComponent } from './components/user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserResultComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RendaUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
