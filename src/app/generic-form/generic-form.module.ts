import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { GenericFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService, FormsConfigService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GenericFormComponent],
  exports: [
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    HttpClientModule
  ],
  providers: [
    FormsConfigService,
    DataService
  ]
})
export class GenericFormModule {
}
