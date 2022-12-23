import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polj-meni',
  templateUrl: './polj-meni.component.html',
  styleUrls: ['./polj-meni.component.css']
})
export class PoljMeniComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('logged');
    localStorage.removeItem('tip');
    this.router.navigate(['/']);
  }

}
