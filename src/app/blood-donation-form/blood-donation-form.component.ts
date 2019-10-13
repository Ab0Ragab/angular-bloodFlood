import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BloodDonateService } from '../blood-donate.service';

@Component({
  selector: 'blood-donation-form',
  templateUrl: './blood-donation-form.component.html',
  styleUrls: ['./blood-donation-form.component.css']
})
export class BloodDonationFormComponent implements OnInit {
  isSubmitted = false;
  askDonate = false;
  diseaseName = false;
  allergiesName = false;
  medication = false;
  constructor(private bloodDonate: BloodDonateService) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
    alert(JSON.stringify(form.value));
    this.bloodDonate.createDoner(form.value);
    form.reset();
    }
  }

  askDonateBlood(){
    this.askDonate = true;
  }

  askDonateBlood2(){
    this.askDonate = false;
  }

  disease()
  {
    this.diseaseName = true;
  }
  disease2()
  {
    this.diseaseName = false;
  }
  allergies(){
    this.allergiesName = true;
  }
  allergies2(){
    this.allergiesName = false;
  }
  medicationDes(){
    this.medication = true;
  }
  medicationDes2(){
    this.medication = false;
  }

}
