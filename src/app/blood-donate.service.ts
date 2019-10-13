import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class BloodDonateService {
  private dbPath = '/bloodDonors';
  bloodDonorRef: AngularFireList<any> = null;
  constructor(private db: AngularFireDatabase) {
    this.bloodDonorRef = this.db.list(this.dbPath);
   }

   createDoner(bloodDonor: any){
     this.bloodDonorRef.push(bloodDonor);
   }
}
