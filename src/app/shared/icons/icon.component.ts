/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, Attribute, isDevMode } from '@angular/core';
import { IconService } from './icon.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'in-icon[name]',
  exportAs: 'inIcon',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./icon.component.scss'],
  host: {
    role: 'img',
    class: 'in-icon',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InIconComponent implements OnInit {
  static ngAcceptInputType_name: string;

  private _name: string = '';

  constructor(private elementRef: ElementRef<HTMLElement>, @Attribute('aria-hidden') ariaHidden: string, private iconService: IconService) {
    // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
    // the right thing to do for the majority of icon use-cases.
    if (!ariaHidden) {
      elementRef.nativeElement.setAttribute('aria-hidden', 'true');
    }
  }

  ngOnInit() {
    if (!this._name) {
      const message = `in-icon must have an icon name, ex: <in-icon name="home"></in-icon>`;
      if (isDevMode()) {
        throw new Error(message);
      }
      console.error(message);
      return;
    }
  }

  @Input() set name(value: string) {
    this._name = value;
    this.setSvgElement(value);
  }

  private setSvgElement(name: string) {
    this.clearSvgElement();
    const svg = this.iconService.makeSvg(name);
    this.elementRef.nativeElement.appendChild(svg);
  }

  private clearSvgElement() {
    const layoutElement = this.elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;

    // Remove existing non-element child nodes and SVGs, and add the new SVG element.
    while (childCount--) {
      const child = layoutElement.childNodes[childCount];
      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
        child.remove();
      }
    }
  }
}
