import { Component } from '@angular/core';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TourismApp';
  ic1=faInstagram;
  ic2=faLinkedin;
  ic3=faPinterest;
  ic4=faTwitter;
  ic5=faSnapchat;

  icc1=faPhone;
  icc2=faMapMarker;
  icc3=faEnvelope;


}
