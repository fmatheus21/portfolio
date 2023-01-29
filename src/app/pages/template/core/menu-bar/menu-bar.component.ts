import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ActivationStart,
  Event,
  NavigationCancel,
  Routes,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { IBreadCrumb } from 'src/app/core/interface/ibreadcrumb';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  titlePage!: string;
  breadcrumbList: Array<any> = [];
  breadcrumbs: Array<IBreadCrumb> = [];
  name: string = '';
  menu: Array<any> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.loadTitlePage();
  }

  loadTitlePage() {
    const childrens: ActivatedRoute[] = this.activatedRoute.children;
    childrens.forEach(route => {
      if (route.outlet === 'primary') {
        this.titlePage = route.snapshot.data['breadcrumb'];
        this.titleService.setTitle(route.snapshot.data['breadcrumb']);
      }
    });
  }
}
