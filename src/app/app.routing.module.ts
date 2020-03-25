import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';


const routes: Routes = [
  {
    path: "",
    component: MainBodyComponent,
    children: [{ path:"", component: MainBodyComponent, pathMatch:"full" }]
  },
  {
    path: "home",
    component: MainBodyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}