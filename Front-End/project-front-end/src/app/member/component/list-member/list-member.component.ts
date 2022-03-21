import { Component, OnInit } from '@angular/core';
import {Member} from '../../model/member';
import {MemberService} from '../../service/member.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

  members: Member[];

  //DI service to deploy methods
  p = 1;
  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.getAllMembers();
  }

  getAllMembers() {
    this.memberService.getAllMembers().subscribe(value => {
      this.members = value;
      console.log(value);
    }, error => {
      console.log(error);
    });
  }

}
