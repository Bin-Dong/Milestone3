import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
//Code 100 = Cancelled
//Code 333 = Success
//Code 500 = Get Request Failed
//Code 0 = Finish Executing
//Code 700 = iOS Cannot find file
//Code 301 = XML parsed completed
//Code 701 = Android cannot find file

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController, public alerCtrl: AlertController, public http: Http, private file: File) {

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
			this.errorCodeCheck(100); //Code 100 = Cancelled
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
						   this.displayResult(returnString,333);
				   },
				   err => {
					   this.errorCodeCheck(500);
				   });
				   this.errorCodeCheck(0);
		  }
		}
	  ]
	});
	prompt.present();
  }

  displayResult(returnString:string, errorCode:number){
	  document.getElementById("textfield").innerHTML="Translated to: <br />" + returnString;
	  document.getElementById("divblock").setAttribute("style","display:block");
	  document.getElementById("textfield").setAttribute("style","border-style: double");
	  this.errorCodeCheck(errorCode);
  }

  doRead() {
  let prompt = this.alerCtrl.create({
	title: 'Load',
	message: "Enter the file name you would like to load",
	inputs: [
	  {
		name: 'text',
		placeholder: 'File Name'
	  },
	],
	buttons: [
	  {
		text: 'Cancel',
		handler: data => {
		  this.errorCodeCheck(100); //Code 100 = Cancelled
		}
	  },
	  {
		text: 'Load',
		handler: data => {
			if (this.platform.is('ios')) {
			this.file.readAsText(this.file.dataDirectory, data.text.toLowerCase()).then(data => {
				let datatext = this.parseXML(data,"Text").replace(/\s/g,"%20");
				let fromtext = this.parseXML(data,"From");
				let totext = this.parseXML(data,"To");
				this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl='+fromtext+'&tl='+totext+'&dt=t&q=' + datatext)
						 .map(res => res.json()).subscribe(data => {
							 let returnString = "";
							 for(let i = 0; i<data[0].length; i++){
								 returnString+=data[0][i][0];
								 if(i != data[0].length - 1){
									 returnString+=" ";
								 }
							 }
							this.displayResult(returnString,333);
					 },
					 err => {
							this.errorCodeCheck(500);

					 });
			}).catch(err=>	this.errorCodeCheck(700));
		}else if(this.platform.is('android')){
			this.file.readAsText(this.file.externalCacheDirectory, data.text.toLowerCase()).then(data => {
				let datatext = this.parseXML(data,"Text").replace(/\s/g,"%20");
				let fromtext = this.parseXML(data,"From");
				let totext = this.parseXML(data,"To");
				this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl='+fromtext+'&tl='+totext+'&dt=t&q=' + datatext)
						 .map(res => res.json()).subscribe(data => {
							 let returnString = "";
							 for(let i = 0; i<data[0].length; i++){
								 returnString+=data[0][i][0];
								 if(i != data[0].length - 1){
									 returnString+=" ";
								 }
							 }
							this.displayResult(returnString,333);
					 },
					 err => {
							this.errorCodeCheck(500);

					 });
			}).catch(err=>	this.errorCodeCheck(701));
		}else{
			document.getElementById("textfield").innerHTML="You are not using iOS or Android";
			document.getElementById("divblock").setAttribute("style","display:block");
			document.getElementById("textfield").setAttribute("style","border-style: double");
		}
		}
	  }
	]
  });
  prompt.present();
  }

  parseXML(text:string,lookFor:string){
	  let parseText = text;
	  let newString=parseText.substring(parseText.lastIndexOf("<"+lookFor+">")+("<"+lookFor+">").length,parseText.lastIndexOf("</"+lookFor+">"));
	  console.log("New string is: " + newString);
	  this.errorCodeCheck(301);
	  return newString;
  }

  errorCodeCheck(code:number){
	  if(code == 100){
		  console.log("Error Code 100");
	  }else if(code == 333){
		  console.log("Success");
	  }else if(code == 500){
		  console.log("Get Request Failed");
		  document.getElementById("textfield").innerHTML="Get Request Failed. Please check your internet connection";
		  document.getElementById("divblock").setAttribute("style","display:block");
		  document.getElementById("textfield").setAttribute("style","border-style: double");
	  }else if(code == 0){
		  console.log("Function finish executing");
	  }else if(code == 700){
		  document.getElementById("textfield").innerHTML="File cannot be Found. Please put your XML SCRIPT in <br />" + this.file.dataDirectory;
		  document.getElementById("divblock").setAttribute("style","display:block");
		  document.getElementById("textfield").setAttribute("style","border-style: double");
		  console.log("Cannot find file");
	  }else if(code == 301){
		  console.log("XML parsed")
	  }else if(code == 701){
		  document.getElementById("textfield").innerHTML="File cannot be Found. Please put your XML SCRIPT in <br />" + this.file.externalCacheDirectory;
		  document.getElementById("divblock").setAttribute("style","display:block");
		  document.getElementById("textfield").setAttribute("style","border-style: double");
		  console.log("File cannot be found in Android");
	  }
  }

}
