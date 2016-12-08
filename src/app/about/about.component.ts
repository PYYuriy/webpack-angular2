import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'about-comp',
  templateUrl: './about.html'
})
export class AboutComponent {
  private unsubscribe: Array<any> = [];
  private messageData: String;

  constructor(private ngRedux: NgRedux<any>,) {
    console.log('footer')
  }

  ngOnInit() {
    this.unsubscribe.push(this.ngRedux.select(['home', 'someMessage']).subscribe((el: any) => {
      this.messageData = el;
    }));
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(el => el.unsubscribe());
  }
}
