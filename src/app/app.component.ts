import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { AppCardComponent } from './app-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppCardComponent],
  template: `
    <header>Angular {{version}} - Content Projection fallback </header>
    <main>
      <section>
        <h2>Fallback content</h2>
        <app-card />
      </section>

      <section>
        <h2>Custom Content</h2>
        <app-card>
          <div header>Start-up</div>
          <ul>
            <li>USD 10/month</li>
            <li>3 Licenses</li>
            <li>1GB Storage</li>
            <li>Email Technical Support</li>
          </ul>
        </app-card>
      </section>

      <section>
        <h2>Custom Content</h2>
        <app-card>
          <div header>Company</div>
          <ul>
            <li>USD 100/month</li>
            <li>50 Licenses</li>
            <li>20GB Storage</li>
            <li>Email and Phone Technical Support</li>
            <li>95% Uptime</li>
          </ul>
        </app-card>
      </section>

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
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  version = VERSION.full;
}
