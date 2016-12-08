import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'footer-com',
  templateUrl: './footer.html'
})
export class FooterComponent {
  private unsubscribe = [];
  private messageData

  constructor(private ngRedux: NgRedux<any>,) {
    console.log('footer')
  }

  ngOnInit() {
    this.unsubscribe.push(this.ngRedux.select(['home', 'someMessage']).subscribe((el: any) => {
      console.log(el)
      this.messageData = el;
    }));
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(el => el.unsubscribe());
  }
}
