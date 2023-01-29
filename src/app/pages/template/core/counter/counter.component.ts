import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counts!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      this.counts = Object.keys(json).map(e => json[e].counts)[0];
    });
  }
}
