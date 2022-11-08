import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FireEventsService { 

    constructor(private fireDb: AngularFirestore) { }

    // A firestore collection ===> contains documents and nothing else. 
    // It can't directly contain raw fields with values, and it can't contain other collections

    // A firestore document =====> contains fields
    
    footballClubsUpdated() {
        return this.footballClubs().valueChanges().pipe();
    }

    playerDetailsUpdated() {
        return this.getPlayerDetails().valueChanges().pipe();
    }

    /************************************************************************************************************* */
    private footballClubs(): AngularFirestoreCollection<any> {
        var footballClubs = this.fireDb.collection('football_clubs');
        return footballClubs;
    }

    private playersOfAClub(clubId:string = 'Real_Madrid'):AngularFirestoreDocument<any> {        
        var players = this.fireDb.collection('football_clubs').doc(clubId);
        return players;
    }

    private getPlayerDetails(clubId:string='Real_Madrid', playerId:string='kroos'):AngularFirestoreDocument<any> {
        return this.playersOfAClub(clubId).collection('players').doc(playerId);
    }
    /************************************************************************************************************* */

}