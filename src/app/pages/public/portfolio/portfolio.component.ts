import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      console.log(data); // Verifique no console se os dados estão corretos
      // Acessando a lista de "projetos" dentro de "portfolio"
      this.projects = data[0].portfolio[0].projetos;
    });
  }
}
