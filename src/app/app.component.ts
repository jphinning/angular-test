import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  products = products;

  state = 1;

  changeState() {
    this.state += 1;
  }

  share() {
    window.alert('Product shared');
  }
}
