import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public http: Http) {

  }
  doAlert(text:string) {
	let alert = this.alerCtrl.create({
	  title: 'Result',
	  message: text,
	  buttons: ['Thanks!']
	});
	alert.present()
  }

  doPrompt() {
	let prompt = this.alerCtrl.create({
	  title: 'Translate',
	  message: "Enter what you would like to translate!",
	  inputs: [
		{
		  name: 'text',
		  placeholder: 'Translate'
		},
	  ],
	  buttons: [
		{
		  text: 'Cancel',
		  handler: data => {
			console.log('Cancel clicked');
		  }
		},
		{
		  text: 'Translate',
		  handler: data => {
			  let datatext = data.text.replace(" ","%20");
			  this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=' + datatext)
					   .map(res => res.json()).subscribe(data => {
						   let returnString = "";
						   for(let i = 0; i<data[0].length; i++){
							   returnString+=data[0][i][0];
							   if(i != data[0].length - 1){
								   returnString+=" ";
							   }
						   }
					   this.doAlert(returnString);
				   },
				   err => {
					   this.doAlert("Failed");
					   console.log(err);
				   });
			console.log('Saved clicked');
			console.log(JSON.stringify(data));
			//this.doAlert("Done");
		  }
		}
	  ]
	});
	prompt.present();
  }

}
