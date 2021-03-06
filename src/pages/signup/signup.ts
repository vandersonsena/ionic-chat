import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	signupForm: FormGroup;

	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
		let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

		this.signupForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			username: ['', [Validators.required, Validators.minLength(3)]],
			password: ['', [Validators.required, Validators.minLength(3)]],
			email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage');
	}

	onSubmit(): void {
		console.log('form submit');
	}

}
