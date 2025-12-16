import { Component } from '@angular/core';
import { NavItems } from '../../constants/index';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  NavItems = NavItems;
}
