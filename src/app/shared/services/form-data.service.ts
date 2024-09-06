import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectOption } from '../model/select-option.model';
// import { NgSelectComponent } from '@ng-select/ng-select';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  yearsData$: BehaviorSubject<SelectOption[]> = new BehaviorSubject<SelectOption[]>([]);

  /**
   * setYearsData
   *
   * @param yearsList years value
   */
  setYearsData(yearsList: SelectOption[]): void {
    this.yearsData$.next(yearsList);
  }

  /**
   * getYearsData
   *
   */
  get getYearsData(): Observable<SelectOption[]> {
    return this.yearsData$;
  }

  /**
   * openSelect
   *
   * @param dropdownItem select name
   */
  openSelect(dropdownItem: any): void {
    dropdownItem.open();
  }
}
