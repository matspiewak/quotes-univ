import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth, private navCtrl: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async register(){
    const {email, password, cpassword} = this
    if(password != cpassword){
      const alert = await this.alertCtrl.create({
        header: "Błąd",
        message: "Podane hasła się nie zgadzają",
        buttons: ['Ok']
      });
      await alert.present();
    }
    else{
      try{
          const res = await this.afAuth.createUserWithEmailAndPassword(email,password)
          console.dir("Success")
          this.navCtrl.navigateForward("/home")
      } catch(error){
        console.dir(error)
      }
    }
  }
}
