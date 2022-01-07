
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { FirstPageModel } from './first-page.model';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  showUpadate :boolean= false;
  showSave :boolean= true;
  formValue !: FormGroup;
  firstPageObj : FirstPageModel= new FirstPageModel();
employeeData ! :any;
showAvatar: boolean= false;
selectAvatar: string ="../../assets/alex.svg";
avatarname: any=[
  {
    src:"./assets/alex.svg"
   },
{
  src: "./assets/john.svg"
},
{
  src: "./assets/smith.svg"
},
]


  constructor(private api: ApiService,
    private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      avatar:[''],
      selectAvatarr:[''],
      name : [''],
      email: [''],
      country: [''],
      dob:['']
    })
    this.getAllEmployee();
  }
 postEmployeeDetails(){
  this.firstPageObj.avatar=this.formValue.value.avatar;
   this.firstPageObj.selectAvatar=this.formValue.value.selectAvatar;
   this.firstPageObj.name=this.formValue.value.name;
   this.firstPageObj.email=this.formValue.value.email;
   this.firstPageObj.country=this.formValue.value.country;
   this.firstPageObj.dob=this.formValue.value.dob;

   this.api.postEmployee(this.firstPageObj).subscribe(res=>{
     console.log(res);
     alert("Employee Added Successfully")
     let ref= document.getElementById('cancel')
     ref?.click();
     this.formValue.reset();
     this.getAllEmployee();
     
   },
   err=>{
     alert("Something Went Wrong")
 })
 }
 getAllEmployee(){
   this.api.getEmployee().subscribe(res=>{
     this.employeeData = res;

   })
 }
 deleteEmployee(row:any){
   this.api.deleteEmployee(row.id).subscribe(res=>{
     alert("Employee Deleted");
     this.getAllEmployee();
   })

 }
 onEdit(row:any){
  this.showUpadate=!this.showUpadate
  this.showSave = !this.showSave
   this.firstPageObj.id=row.id;
  
   
   this.formValue.controls['name'].setValue(row.name)
   this.formValue.controls['email'].setValue(row.email)
   this.formValue.controls['avatar'].setValue(row.avatar)
   this.formValue.controls['dob'].setValue(row.dob)
   this.formValue.controls['country'].setValue(row.country)
   this.formValue.controls['selectAvatar'].setValue(row.selectAvatar)
 
 }
 updateEmployeeDetails(){
  this.firstPageObj.avatar=this.formValue.value.avatar;
  this.firstPageObj.selectAvatar=this.formValue.value.selectAvatar;
  this.firstPageObj.name=this.formValue.value.name;
  this.firstPageObj.email=this.formValue.value.email;
  this.firstPageObj.country=this.formValue.value.country;
 this.firstPageObj.dob=this.formValue.value.dob;
  this.api.updateEmployee(this.firstPageObj,this.firstPageObj.id).subscribe(res=>
    {
      alert("updated Susseccfully");
      let ref= document.getElementById('cancle')
     ref?.click();
     this.formValue.reset();
     this.getAllEmployee();
    })
 }
 showImage(){
  this.showAvatar=! this.showAvatar;
 }
 changeAvatar(img:any){
   this.selectAvatar= img.src
console.log(img)
 }

}
