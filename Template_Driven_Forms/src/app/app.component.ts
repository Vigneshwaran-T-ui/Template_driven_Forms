import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public tempDriForBtn = false;
  public reaForBtn = false;
  public forArrBtn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.valueChange();
  }

  valueChange() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (
          event.url === '/' ||
          event.urlAfterRedirects === '/Template-driven-form'
        ) {
          this.tempDriForBtn = true;
          this.reaForBtn = false;
          this.forArrBtn = false;
        }
        if(event.urlAfterRedirects === '/Reactive-Form') {
          this.tempDriForBtn = false;
          this.reaForBtn = true;
          this.forArrBtn = false;
        }
        if(event.urlAfterRedirects === '/Form-Array') {
          this.tempDriForBtn = false;
          this.reaForBtn = false;
          this.forArrBtn = true;
        }
      });
  }
}
