import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ListMemberComponent } from './component/list-member/list-member.component';
import { UpdateMemberComponent } from './component/update-member/update-member.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ListMemberComponent, UpdateMemberComponent],
  exports: [
    ListMemberComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MemberModule { }
