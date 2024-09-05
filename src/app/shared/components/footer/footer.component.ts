import { Component } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { FooterSection } from '../../interface/footer.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerList: FooterSection[] = [];

  ngOnInit(): void {
    this.footerList = [
      {
        title: 'Get started',
        items: [
          { route: '/', type: true, name: 'Call (800) 474-1308' },
          { route: '/get-a-quote', name: 'Get a Free Quote' },
          { route: '/noble-purpose', name: 'Noble Purpose' },
        ],
      },
      {
        title: 'NobleQuote',
        items: [
          { route: '/about-us', name: 'About Us' },
          { route: '/why-noblequote', name: 'Why NobleQuote' },
          { route: '/career', name: 'Careers' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { route: '/learning-center', name: 'Learning Center' },
          { route: '/faq', name: 'Frequently Asked Questions' },
          { route: '/sample-contract', name: 'Sample Contract' },
          { route: '/glossary', name: 'Glossary' },
        ],
      },
      {
        title: 'Help & Support',
        items: [
          { route: '/contact-us', name: 'Contact Us' },
          { route: '/opt-out', name: 'Opt-Out' },
          { route: '/privacy-policy', name: 'Privacy Policy' },
          { route: '/terms', name: 'Terms and Conditions' },
        ],
      },
    ];
  }
}
