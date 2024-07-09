import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { AppCardComponent } from "./app-card.component";

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [AppCardComponent],
  template: `
    <section>
      <h2>Custom Content</h2>
      <app-card>
        <div header>{{ tier() }}</div>
        <ul>
          @for (item of features(); track item) {
            <li>{{ item }}</li>
          }
        </ul>
      </app-card>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppPricingListComponent {
  tier = input<string>('');
  features = input<string[]>([]);
}
