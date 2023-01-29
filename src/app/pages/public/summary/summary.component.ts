import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  education: any[] = [];
  works: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      const result = Object.keys(json).map(e => json[e].summary[0])[0];
      this.education = result.education;
      this.works = result.works;
      console.log(this.works);
    });
  }
}
