import { Component } from '@angular/core';

import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eurder-frontend';

  constructor(private apiService: ApiService) {
    apiService.getItemTypes().toPromise().then(console.log);
  }

}

