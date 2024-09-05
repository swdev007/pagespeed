import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ICONS } from './icons';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(ICONS) private icons: Map<string, string>) {}

  makeSvg(name: string) {
    const svg = this.createSvgElement(name);

    svg.setAttribute('fit', '');
    svg.setAttribute('height', '100%');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('focusable', 'false');
    return svg;
  }

  private createSvgElement(name: string) {
    const div = this.document.createElement('DIV');
    div.innerHTML = this.getIcon(name);
    const svg = div.querySelector('svg');
    if (!svg) throw new Error(`Could not find svg element in icon ${name}.`);
    return svg;
  }

  private getIcon(name: string): string {
    const icon = this.icons.get(name);
    if (!icon) return '';
    return icon;
  }
}
