import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMemberComponent} from './component/list-member/list-member.component';
import {UpdateMemberComponent} from './component/update-member/update-member.component';


const routes: Routes = [
  {
    path: '',
    component: ListMemberComponent
  },
  {
    path: 'update/:id',
    component: UpdateMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
