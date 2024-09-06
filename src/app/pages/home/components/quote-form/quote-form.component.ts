import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectOption } from '../../../../shared/model/select-option.model';
import { map } from 'rxjs';
import {
  MakeResponse,
  ModelResponse,
} from '../../../../shared/model/car.model';
import {
  FreeQuoteEmailRequest,
  FreeQuoteEmailResponse,
} from '../../../../shared/model/email.request.model';
import { FormDataService } from '../../../../shared/services/form-data.service';
import { CarService } from '../../../../shared/services/car.service';
import { EmailService } from '../../../../shared/services/email.service';
import { UserFormData } from '../../../../shared/interface/main.interface';
import { UserDataService } from '../../../../shared/services/user-data.service';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss',
})
export class QuoteFormComponent implements OnInit {
  years: SelectOption[] = [];
  makes: SelectOption[] = [];
  models: SelectOption[] = [];
  loader = false;
  saleNotify = false;
  selectedYear = '';
  sendEmailForm!: FormGroup;
  destroyRef = inject(DestroyRef);
  formGroup: any;
  constructor(
    private _fb: FormBuilder,
    private emailService: EmailService,
    // private notifierService: NotifierService,
    private carService: CarService,
    private saveUserData: UserDataService,
    private formDataService: FormDataService // private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetch();
  }

  initForm() {
    this.sendEmailForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z0-9!@#$%^&*()]+$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[A-Za-z0-9!@#$%^&*()]+$')],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      yearOfVehicle: [null, Validators.required],
      makeOfVehicle: [null, Validators.required],
      model: [null, Validators.required],
      mileage: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.max(192000),
        ],
      ],
      recaptcha: ['', Validators.required],
    });
  }

  /**
   * get data from service
   */
  fetch(): void {
    this.formDataService.getYearsData
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: any) => {
        this.years = data;
      });
  }
  /**
   * getModelData
   *
   * @param event select value
   */
  getModelData(event: SelectOption): void {
    this.models = [];
    this.sendEmailForm?.controls['model'].reset();
    this.carService
      .getModels(this.selectedYear, event.value)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((res: ModelResponse[]) => {
          return res.map((model) => {
            return {
              name: model.model,
              value: model.model,
            };
          });
        })
      )
      .subscribe((res: any) => (this.models = res));
  }

  getMakesData(event: SelectOption): void {
    if (!event) {
      this.makes = [];
      this.selectedYear = '';
      return;
    }
    this.models = [];
    this.sendEmailForm?.controls['makeOfVehicle'].reset();
    this.sendEmailForm?.controls['model'].reset();
    this.selectedYear = event.value;
    this.carService
      .getMakes(event.value)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((res: MakeResponse[]) => {
          return res.map((year) => {
            return {
              name: year.make,
              value: year.make,
            };
          });
        })
      )
      .subscribe((res: any) => (this.makes = res));
  }

  /**
   * recaptchaToken
   */
  get recaptchaToken(): string {
    return <string>this.sendEmailForm?.controls['recaptcha'].value;
  }

  /**
   * submit form Data
   */
  saveData(): void {
    const userInfo: UserFormData = {
      firstName: this.sendEmailForm?.controls?.['firstName']?.value ?? '',
      lastName: this.sendEmailForm?.controls?.['lastName']?.value ?? '',
      // fullName: `${<string>this.sendEmailForm?.controls.firstName.value} ${<string>this.sendEmailForm?.controls.lastName.value}`,
      email: this.sendEmailForm?.value.email ?? '',
      phoneNumber: this.sendEmailForm?.value.phoneNumber?.toString() ?? '',
    };
    this.saveUserData.setEmailFormData(userInfo);
    this.open();
  }

  /**
   * open modal
   */
  open(): void {
    // const modal = this.modalService.open(AfterRedirectedFormComponent, { size: 'xl' });
    // modal.result.then((res) => {
    //   if (res === 'success') {
    //     this.sendEmailForm.reset();
    //   }
    // });
  }

  /**
   * submit
   */
  submit(): void {
    if (this.recaptchaToken.length) {
      this.loader = true;
      const request: FreeQuoteEmailRequest = {
        firstName: <string>this.sendEmailForm?.controls['firstName'].value,
        lastName: <string>this.sendEmailForm?.controls['lastName'].value,
        // fullName: `${<string>this.sendEmailForm?.controls.firstName.value} ${<string>this.sendEmailForm?.controls.lastName.value}`,
        phoneNumber: this.sendEmailForm?.value.phoneNumber?.toString() ?? '',
        email: this.sendEmailForm?.value.email ?? '',
        year: this.sendEmailForm?.value.yearOfVehicle ?? '',
        make: <string>(
          this.makes.find(
            (make) =>
              make.value ===
              <string>(
                (<unknown>this.sendEmailForm?.controls['makeOfVehicle'].value)
              )
          )?.name
        ),
        model: <string>(
          this.models.find(
            (model) =>
              model.value ===
              <string>(<unknown>this.sendEmailForm?.controls['model'].value)
          )?.name
        ),
        mileage: this.sendEmailForm?.value.mileage ?? '',
      };
      this.emailService
        .sendFreeQuoteEmail(request, this.recaptchaToken)
        .subscribe(
          (res: FreeQuoteEmailResponse[]) => {
            if (res[0].status != 'success') return;
            this.loader = false;
            // this.notifierService.notify(
            //   'success',
            //   'We have successfully received your message, our representative will reach out to you soon.'
            // );

            this.sendEmailForm?.reset();
            // this.router.navigate(['/form-success']);
          },
          (error: any) => {
            this.loader = false;
            // this.notifierService.notify('error', error.error.errors?.[0] ? error.error.errors?.[0].msg : error.error);
            this.sendEmailForm?.patchValue({
              recaptcha: '',
            });
          }
        );
    }
  }

  /**
   * openSelect
   *
   * @param dropdownItem select name
   */
  openSelect(dropdownItem: any): void {
    this.formDataService.openSelect(dropdownItem);
  }
}

function takeUntilDestroyed(destroyRef: DestroyRef): any {
  throw new Error('Function not implemented.');
}
