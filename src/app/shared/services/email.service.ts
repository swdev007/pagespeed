import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FreeQuoteEmailRequest, FreeQuoteEmailResponse, Source } from '../model/email.request.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  source$ = new BehaviorSubject<Source | undefined>(undefined);

  /**
   * constructor
   *
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * sendFreeQuoteEmail
   *
   * @param request FreeQuoteEmailRequest
   * @param token string
   */
  sendFreeQuoteEmail(request: FreeQuoteEmailRequest, token: string): Observable<FreeQuoteEmailResponse[]> {
    if (this.source$.value) {
      request.source = this.source$.value;
    }

    return this.http.post<FreeQuoteEmailResponse[]>(`${environment.apiBasePath}/api/vehicles/add-quote`, {
      ...request,
      token,
    });
  }
}
