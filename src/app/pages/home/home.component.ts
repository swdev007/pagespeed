import { Component } from '@angular/core';
import { BannerWithFormComponent } from '../../shared/components/banner-with-form/banner-with-form.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerWithFormComponent, QuoteFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
}
