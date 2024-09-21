import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostdashbordComponent } from './component/postdashbord/postdashbord.component';
import { PostformComponent } from './component/postform/postform.component';
import { NavComponent } from './component/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartformComponent } from './chartform/chartform.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    PostdashbordComponent,
    PostformComponent,
    NavComponent,
    ChartformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
