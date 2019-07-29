import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormsConfigService {
  constructor(private httpClient: HttpClient) {}

  public getFormConfig(): Observable<FormlyFieldConfig[]> {
    const formConfig: FormlyFieldConfig[] = [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true,
        }
      }
    ];

    // TODO: Make real call to some URL that will return form config.
    return of(formConfig);
  }
}
