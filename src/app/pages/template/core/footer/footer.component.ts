import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  copyright: string = '';

  ngOnInit(): void {
    this.initCopyright();
  }

  initCopyright() {
    var ano = new Date().getFullYear();
    this.copyright = '© 2017 - ' + ano + ' Fernando Matheus';
  }
}
