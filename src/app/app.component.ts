import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IconService } from './shared/icons/icon.service';
import { GtmService } from './shared/services/gtm.service';
import { BannerNavComponent } from './shared/components/banner-nav/banner-nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BannerNavComponent],
  providers: [IconService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private gtmService: GtmService) {}

  ngOnInit(): void {
    this.gtmService.loadGtm();
  }
}
