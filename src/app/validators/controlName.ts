import { AbstractControl } from "@angular/forms";

export function  ControlReferenceNumber(c: AbstractControl):  string | null {
  const formGroup = c.parent.controls;
  return Object.keys(formGroup).find(reference_number => c === formGroup[reference_number])  || null;
 }
