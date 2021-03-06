import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExtraFoodInfoPage } from '../extra-food-info/extra-food-info';
import { ProvideNeedyDataPage } from '../provide-needy-data/provide-needy-data';
import { SelectStatePage } from '../select-state/select-state';




@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  /*ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      this.toast.create({
        message : `Welcome ${data.email}`,
        duration : 3000
      }).present();
    });
  }*/

  extraFoodInfo() {
    this.navCtrl.push(ExtraFoodInfoPage);
  }

  showNeedy(){
    this.navCtrl.push(ProvideNeedyDataPage);
  }
  
  showSelect(){
    this.navCtrl.push(SelectStatePage);
  }

  showSearch(){
    this.navCtrl.push(SelectStatePage);
  }
}
