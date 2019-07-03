import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './components/todo/todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { JoinPipe } from './pipes/join.pipe';
import { BgDirective } from './directives/bg.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { TodoBgColorDirective } from './directives/todo-bg-color.directive';
import { MyForDirective } from './directives/my-for.directive';
import { MyTimePipe } from './pipes/my-time.pipe';
import { MyCountArrPipe } from './pipes/my-count-arr.pipe';
import { MyStyleDirective } from './directives/my-style.directive';
import { MyClassDirective } from './directives/my-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TodoComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    JoinPipe,
    BgDirective,
    MyIfDirective,
    TodoBgColorDirective,
    MyForDirective,
    MyTimePipe,
    MyCountArrPipe,
    MyStyleDirective,
    MyClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
