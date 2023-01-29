import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      var result = Object.keys(json).map(e => json[e].brands);
      result.forEach((e: any) => {
        this.brands = e;
      });
    });
  }
}
