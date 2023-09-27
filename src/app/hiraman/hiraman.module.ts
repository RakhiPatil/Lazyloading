import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangalComponent } from './mangal/mangal.component';
import { ChhotulalComponent } from './chhotulal/chhotulal.component';
import { ShevabaiComponent } from './shevabai/shevabai.component';
import { RouterModule, Routes } from '@angular/router';

var sv:Routes =[
  {
    path:'', component:ShevabaiComponent,
    children:[
      {
        path:'ch', component:ChhotulalComponent
      },
      {
        path:'mg', component:MangalComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MangalComponent,
    ChhotulalComponent,
    ShevabaiComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(sv)
  ]
})
export class HiramanModule { }
