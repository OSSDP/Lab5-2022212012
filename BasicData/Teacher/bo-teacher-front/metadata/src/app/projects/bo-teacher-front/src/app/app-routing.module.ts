import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'TeacherDetail', loadChildren:'./teacherdetail/teacherdetail#TeacherDetailModule'},
  { path: 'TeacherList', loadChildren:'./teacherlist/teacherlist#TeacherListModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }