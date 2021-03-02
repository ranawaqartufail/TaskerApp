import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { DataStore } from 'aws-amplify';
import { Project } from 'src/models';
import { Auth } from 'aws-amplify';
import { APIService } from './API.service';
import { DataStore } from '@aws-amplify/datastore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor(){}

  async ngOnInit() {
  }
}


