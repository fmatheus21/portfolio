import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/service/app.service';
import { ScriptService } from 'src/assets/js/script.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css'],
})
export class InfoBarComponent implements OnInit {
  infobar!: any[];
  skills!: any[];
  knowledges!: any[];
  socials!: any[];
  yearBirth = 0;

  constructor(private appService: AppService, private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.loadScripts();
    this.load();
  }

  private loadScripts() {
    this.scriptService
      .loadExternalScript('./assets/js/progress.js')
      .then(() => {})
      .catch(() => {});

    this.scriptService
      .loadExternalScript('./assets/js/plugins/swiper.min.js')
      .then(() => {})
      .catch(() => {});
  }

  load() {
    this.appService.findAll().subscribe(data => {
      var json = JSON.parse(JSON.stringify(data));
      this.infobar = Object.keys(json).map(e => json[e].infobar)[0];
      this.yearBirth = new Date().getFullYear() - this.infobar[0].yearBirth;
      this.skills = this.infobar[0].skills;
      this.knowledges = this.infobar[0].knowledges;
      this.socials = this.infobar[0].socials;
    });
  }
}
