import { Component } from '@angular/core';
import { BannerWithFormComponent } from '../../shared/components/banner-with-form/banner-with-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerWithFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
