import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GtmService {
  
  private gtmId = 'GTMR8D15F53W';

  constructor() { }

  public loadGtm(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmId}`;
    document.head.appendChild(script);

    // Optionally add the GTM noscript tag as well
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${this.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }
}
