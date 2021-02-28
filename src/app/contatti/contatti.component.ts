import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import firebase from 'firebase';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  profileForm: FormGroup;
  uid: string;
  msgs: Message[];
  forms: any[];


  constructor() {
    this.uid = '';
    this.forms = [];
    this.msgs = [];
    this.profileForm = new FormGroup({
      name: new FormControl('',  Validators.required),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }


  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyAPHRnOJI2CaofGX4eN4OOJs0wtHET6qxc',
      authDomain: 'api-project-733178717754.firebaseapp.com',
      databaseURL: 'https://api-project-733178717754-default-rtdb.firebaseio.com',
      projectId: 'api-project-733178717754',
      storageBucket: 'api-project-733178717754.appspot.com',
      messagingSenderId: '733178717754',
      appId: '1:733178717754:web:df2029a03cc54513cef703',
      measurementId: 'G-RC48RY7NXS'
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
        firebase.database().ref('users').child(this.uid).child('forms').get().then(
          value => value.exists() ? this.forms = value.val() : this.forms = []);
      }
    });

    this.login();
  }

  send(): void {

    console.log('ciao', this.msgs);

    const msg = {
      name: this.profileForm.value.name,
      phone: this.profileForm.value.phone,
      message: this.profileForm.value.message
    };
    this.forms.push(msg);

    console.log('Forms', this.forms);
    firebase.database().ref('users/'.concat(this.uid)).set({forms: this.forms}).then(value => this.msgs = [{
      severity: 'success',
      summary: 'Messaggio Inviato',
      detail: 'Grazie per averci contattato'
    }]);
  }

  login(): void {
    firebase.auth().signInAnonymously()
      .then((s) => {
        console.log('Auth ok');
      })
      .catch((error) => {

      });
  }
}
