import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PradipComponent } from './pradip/pradip.component';
import { JyotiComponent } from './jyoti/jyoti.component';
import { JijabaiComponent } from './jijabai/jijabai.component';
import { RouterModule, Routes } from '@angular/router';

var jj:Routes = [
{
  path:'', component:JijabaiComponent,
  children:[
    {
      path:'jt', component:JyotiComponent
    },
    {
      path:'pd', component:PradipComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    PradipComponent,
    JyotiComponent,
    JijabaiComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(jj)
  ]
})
export class PundalikModule { }
