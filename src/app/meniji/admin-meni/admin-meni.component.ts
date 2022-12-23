import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-meni',
  templateUrl: './admin-meni.component.html',
  styleUrls: ['./admin-meni.component.css']
})
export class AdminMeniComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('logged');
    localStorage.removeItem('tip');
    this.router.navigate(['/']);
  }

}
