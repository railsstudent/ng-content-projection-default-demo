import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { AppCardComponent } from './app-card.component';
import { AppPricingListComponent } from './app-price-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppCardComponent, AppPricingListComponent],
  template: `
    <header>Angular {{version}} - Content Projection fallback </header>
    <main>
      <section>
        <h2>Fallback content</h2>
        <app-card />
      </section>
      <app-price-list tier="Start-up" [features]="startUpFeatures" />
      <app-price-list tier="Company" [features]="companyFeatures" />
      <section>
        <h2>Custom Content</h2>
        <app-card>
          <div header>Enterprise</div>
          <ul>
            <li>USD 999/month</li>
            <li>200+ Licenses</li>
            <li>1TB Storage</li>
            <li>Email and Phone Technical Support</li>
            <li>Dedicated Support Staff</li>
            <li>99.999% Uptime</li>
          </ul>
          <div footer>&nbsp;</div>
        </app-card>
      </section>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  version = VERSION.full;

  startUpFeatures = [
    'USD 10/month',
    '3 Licenses',
    '1GB Storage',
    'Email Technical Support',
  ];

  companyFeatures = [
    'USD 100/month',
    '50 Licenses',
    '20GB Storage',
    'Email and Phone Technical Support',
    '95% Uptime'
  ];
}
