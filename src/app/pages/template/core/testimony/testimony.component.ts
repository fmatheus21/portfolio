import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
})
export class TestimonyComponent implements OnInit {
  testimonials!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      var result = Object.keys(json).map(e => json[e].testimonials);
      result.forEach((e: any) => {
        this.testimonials = e;
      });
    });
  }
}
