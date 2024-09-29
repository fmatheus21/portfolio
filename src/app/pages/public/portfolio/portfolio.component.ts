import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  filters: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      this.projects = data[0].portfolio[0].projetos;
      this.filters = data[0].portfolio[0].filtros;
    });
  }
}
