import { Component, OnInit } from '@angular/core';
import { kwotz } from '../kwotz';

@Component({
  selector: 'app-kwot',
  templateUrl: './kwot.component.html',
  styleUrls: ['./kwot.component.css']
});

quotes: kwotz [] = [
  {id:1, name:'Be the CHANGE that you wish to see in the world- Mahtma Ghandi'},
  {id:2, name:'The first step towards getting somewhere is to decide you are not going to stay where you are- J.P Morgan'},
  {id:3, name:'The pessimist sees difficulty in opportunity. The optimist sees the opportunity in every difficulty- Winston Churchill'},
  {id:4, name:'Believe you can and you are halfway there-Theodore Roosevelt'},
  {id:5, name:'No pressure, No diamonds- Thomas Carlyle'},

 ];
