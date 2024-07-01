import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="header">
      <ng-content select="[header]">Free Tier</ng-content>
    </div>
    <div class="content">
      <ng-content> 
        <ul>
          <li>Free of Charge</li>
          <li>1 License</li>
          <li>500MBs Storage</li>
          <li>No Support</li>
        </ul> 
      </ng-content>
    </div>
    <div class="footer">
      <ng-content select="[footer]">
        <button>Upgrade</button>
      </ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppCardComponent {}
