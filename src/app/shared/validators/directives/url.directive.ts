import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { UrlConfig, urlValidator } from '../url.validator';

@Directive({
  selector: '[csUrl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlDirective,
      multi: true,
    },
  ],
})
export class UrlDirective implements Validator {
  // tslint:disable no-input-rename
  @Input('csUrl')
  config: UrlConfig;

  validate(control: AbstractControl): ValidationErrors | null {
    return urlValidator(this.config)(control);
  }
}
