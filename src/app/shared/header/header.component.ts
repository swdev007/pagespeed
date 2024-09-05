import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menu: any[] = [
    {
      label: 'Coverage Plans',
      link: '',
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
    },
  ];
}
