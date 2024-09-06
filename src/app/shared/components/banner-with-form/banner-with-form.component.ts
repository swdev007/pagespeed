import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, Input } from '@angular/core';

@Component({
  selector: 'app-banner-with-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-with-form.component.html',
  styleUrl: './banner-with-form.component.scss',
})
export class BannerWithFormComponent {
  destroyRef = inject(DestroyRef);

  @Input() caption = '';
  @Input() description = '';
  @Input() image = '';
  @Input() buttonLabel = '';
  @Input() buttonUrl = '';
}
