import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  services!: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      this.services = Object.keys(json).map(e => json[e].services)[0];
    });
  }
}
