import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import{FormsModule} from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductNotifiComponent } from './product-notifi/product-notifi.component';
import { PipeTextComponent } from './pipe-text/pipe-text.component';
import { DatepickerTextComponent } from './datepicker-text/datepicker-text.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { CaraousleTestComponent } from './caraousle-test/caraousle-test.component';
import { ProductFormComponent } from './product-form/product-form.component'
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { ColorDirective } from './color.directive';
@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    FooterComponent,
    ProductListComponent,
    ProductNotifiComponent,
    PipeTextComponent,
    DatepickerTextComponent,
    TimepickerTestComponent,
    RatingTestComponent,
    SwitchTestComponent,
    ReverseStringPipe,
    CaraousleTestComponent,
    ProductFormComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
