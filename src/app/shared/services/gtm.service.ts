import { Injectable,PLATFORM_ID, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GtmService {
  private renderer: Renderer2;
  isBrowser: boolean;
  private gtmId = 'G-MR8D15F53W'; // Replace with your actual GTM ID

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public loadGtm(): void {
    if(!this.isBrowser){
      return;
    }
    // Check if requestIdleCallback is supported
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => this.addGtmScript());
    } else {
      // Fallback for browsers without requestIdleCallback support
      setTimeout(() => {this.addGtmScript();this.addGtmNoScript()}, 0);
    }
  }
  private addGtmNoScript(): void {
    const noscript = this.renderer.createElement('noscript');
    const iframe = this.renderer.createElement('iframe');
    this.renderer.setAttribute(iframe, 'src', `https://www.googletagmanager.com/ns.html?id=${this.gtmId}`);
    this.renderer.setAttribute(iframe, 'height', '0');
    this.renderer.setAttribute(iframe, 'width', '0');
    this.renderer.setAttribute(iframe, 'style', 'display:none;visibility:hidden');
    this.renderer.appendChild(noscript, iframe);
    this.renderer.appendChild(this.document.body, noscript);
  }

  private addGtmScript(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmId}`;

    // Append script to the head
    this.renderer.appendChild(this.document.head, script);

    // Optional: Log an error if the script fails to load
    script.onerror = (error:any) => {
      console.error('GTM script failed to load', error);
    };

    console.log('GTM script added successfully');
  }
}
