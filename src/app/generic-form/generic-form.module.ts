import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { GenericFormComponent } from './components';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    FormlyMaterialModule
  ]
})
export class GenericFormModule { }
