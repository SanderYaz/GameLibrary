import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html'
})
export class LayoutDefaultComponent implements OnInit {

  isCollapsed = false;
  isBreakpointMedium = false;

  constructor(private router: Router) { }

  @HostListener('window:resize', [])
  onResize() {
    this.setDimensions();
  }

  ngOnInit(): void {
    this.setDimensions();

    // When navigation start collapse mobile menu.
    this.router.events.subscribe((event) => {
      if (this.isBreakpointMedium && event instanceof NavigationStart) {
        this.isCollapsed = true;
      }
    });

    if (this.isBreakpointMedium) {
      this.isCollapsed = true;
    }
  }

  onSiderOverlayClick() {
    if (this.isBreakpointMedium && !this.isCollapsed) {
      this.isCollapsed = true;
    }
  }

  onIsCollapsedChange(value: boolean) {
    this.isCollapsed = value;
  }

  private setDimensions() {
    this.isBreakpointMedium = window.innerWidth <= 768;
  }
}
