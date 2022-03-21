import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../service/member.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  //reactive angular form
  memberForm: FormGroup = new FormGroup({
    id: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("^Mem-\\d{3}$")])),
    name: new FormControl('',
      Validators.required),
    identityNumber: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("")])),
    email: new FormControl('',
      Validators.compose([Validators.required,Validators.email])),
    phoneNumber: new FormControl('',
      Validators.compose([Validators.required,Validators.pattern("")])),
    address: new FormControl('',
      Validators.required)
  })

  id: string;

  //DI service to deploy methods
  //DI activatedRoute to get params
  //DI router to convert components
  constructor(
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      console.log(this.id);
      this.getMemberById(this.id);
    })
  }

  getMemberById(id: string) {
    this.memberService.findMemberById(id).subscribe(value => {
      this.memberForm.setValue(value);
      console.log(value);
    }, error => {
      console.log(error);
    })
  }

  updateMember() {
    const member = this.memberForm.value;
    console.log(member);

    this.memberService.updateMember(this.id,member).subscribe(() => {
      console.log('update success!');
      this.router.navigateByUrl('/member').then(r => console.log('back to list!'));
    }, error => {
      console.log(error);
    })
  }

}
