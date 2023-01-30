import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  residence: any[] = [];
  socialNetworks: any[] = [];
  contacts: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      const result = Object.keys(json).map(e => json[e].contacts[0])[0];
      this.residence = result.residence;
      this.socialNetworks = result.socialNetworks;
      this.contacts = result.contact;
      console.log(this.contacts);
    });
  }
}
