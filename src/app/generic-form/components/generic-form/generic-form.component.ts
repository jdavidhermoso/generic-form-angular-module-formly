import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { DataService, FormsConfigService } from '../../services';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
})
export class GenericFormComponent implements OnInit {
  public formFields: Observable<FormlyFieldConfig[]>;
  public model: Observable<any>;
  public form: FormGroup;

  constructor(private formsConfigService: FormsConfigService,
              private dataService: DataService) {}

  public ngOnInit(): void {
    this.formFields = this.formsConfigService.getFormConfig();
    this.model = this.dataService.getData();
    this.form = new FormGroup({});
  }

  public onFormSubmit(): void {
    console.log(this.form.value);
  }
}
