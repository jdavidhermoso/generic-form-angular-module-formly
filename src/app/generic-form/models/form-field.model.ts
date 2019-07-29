import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormField extends FormlyFieldConfig {
  optionsEndpoint?: string;
}
