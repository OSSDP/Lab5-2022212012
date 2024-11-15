import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'StudentDetail', loadChildren:'./studentdetail/studentdetail#StudentDetailModule'},
  { path: 'StudentList', loadChildren:'./studentlist/studentlist#StudentListModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }