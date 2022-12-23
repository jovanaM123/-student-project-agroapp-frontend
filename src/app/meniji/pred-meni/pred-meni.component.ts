import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pred-meni',
  templateUrl: './pred-meni.component.html',
  styleUrls: ['./pred-meni.component.css']
})
export class PredMeniComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('logged');
    localStorage.removeItem('tip');
    this.router.navigate(['/']);
  }

}
