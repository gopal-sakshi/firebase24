import { Component } from '@angular/core';
import { FireEventsService } from './fcm-service002';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'firebase24';

  constructor(private fireEventsService : FireEventsService) { }

  // stopping because I do not know how to proceed...
  // looking into water-game-ui     for cordova & stuff

  ngOnInit() {
    this.subscribeToFirebase();
  }

  subscribeToFirebase() {
    this.fireEventsService.footballClubsUpdated().subscribe(res => {
      console.log(res);
    });

    this.fireEventsService.playerDetailsUpdated().subscribe(res => {
      console.log(res);
    });
  }
}
