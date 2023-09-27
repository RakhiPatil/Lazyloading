import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'hr',
    loadChildren:() =>
    import('./hiraman/hiraman.module').then((a) =>
    a.HiramanModule) 
  },
  {
    path:'pl',
    loadChildren:() =>
    import('./pundalik/pundalik.module').then((a) =>
    a.PundalikModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
