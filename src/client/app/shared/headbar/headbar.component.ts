import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import {SelectItem, TabViewModule} from 'primeng/primeng';

/**
 * This class represents the headbar component.
 */

 declare var Modena: any;
 
@Component({
  moduleId: module.id,
  selector: 'sdp-headbar',
  templateUrl: 'headbar.component.html',
  styleUrls: ['headbar.component.css']
})

export class HeadbarComponent implements OnInit {

  ngOnInit() {
        Modena.init();
    }

}
