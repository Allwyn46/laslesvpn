import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Plan } from '../plan/plan';

@Component({
  selector: 'app-layout',
  imports: [Navbar, Hero, About, Plan],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
