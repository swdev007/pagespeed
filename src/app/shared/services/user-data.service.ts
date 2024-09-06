import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserFormData } from '../interface/main.interface';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  clickGetQuote$: Subject<boolean> = new Subject<boolean>();
  userDataForm: UserFormData = {
    email: '',
    // fullName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  };
  userInfo$: BehaviorSubject<UserFormData> = new BehaviorSubject<UserFormData>(this.userDataForm);

  /**
   * emailFormData
   */
  get emailFormData(): UserFormData {
    return this.userInfo$.value;
  }

  /**
   * setEmailFormData
   *
   * @param userData User data
   */
  setEmailFormData(userData: UserFormData): void {
    this.userInfo$.next(userData);
  }
}
