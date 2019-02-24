import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  email: string;

  // constructor(private _db: AngularFireDatabase) {  }

  // buttonClick(): void {
  //   this._db.database.ref('/interessados').set({email: this.email});
  // }
}
