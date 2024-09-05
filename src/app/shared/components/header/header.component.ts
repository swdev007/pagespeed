import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  displayMenu: boolean = false;
  menuId: string | undefined;
  menuActive = false;
  dropDownHeight = '0px';
  menu: any[] = [
    {
      label: 'Coverage Plans',
      link: '',
      id: 'coverage',
      children: [
        {
          label: 'Our Plans',
          link: '/plans',
        },
        {
          label: 'Breakdown Protection',
          link: 'plans/extended-car-warranty',
        },
        {
          label: 'Diamond Coverage',
          link: '/plans/extended-car-warranty/diamond-coverage',
        },
        {
          label: 'Elite Coverage',
          link: '/plans/extended-car-warranty/elite-coverage',
        },
        {
          label: 'Premier Coverage',
          link: '/plans/extended-car-warranty/premier-coverage',
        },
        {
          label: 'Powertrain Coverage',
          link: '/plans/extended-car-warranty/powertrain-coverage',
        },
        {
          label: 'EV Coverage',
          link: '/plans/extended-car-warranty/ev-coverage',
        },
      ],
    },
    {
      label: 'Help & Support',
      link: '',
      id: 'help_support',
      children: [
        {
          label: 'Contact Us',
          link: '',
        },
        {
          label: 'About us',
          link: '',
        },
        {
          label: 'Why NobleQuote',
          link: '',
        },
        {
          label: 'Opt-Out',
          link: '',
        },
      ],
    },
    {
      label: 'Resources',
      link: '',
      id: 'resource',
      children: [
        {
          label: 'Learning Center',
          link: ',',
        },
        {
          label: 'Learning Center Authors',
          link: ',',
        },
        {
          label: 'Frequently Asked Questions',
          link: ',',
        },
        {
          label: 'Sample Contract',
          link: ',',
        },
        {
          label: 'Glossary',
          link: ',',
        },
      ],
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  menuToggle(menuId: string) {
    if (this.menuActive) {
      if (this.menuId === menuId) {
        this.menuActive = false;
      }
    } else {
      this.menuActive = true;
    }
    const elm = this.document.getElementById(`${menuId}-dropdown`);
    this.dropDownHeight = `${elm?.scrollHeight}px`;
    this.menuId = menuId;
  }
}
