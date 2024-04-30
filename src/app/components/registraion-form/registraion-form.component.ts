import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registraion-form',
  templateUrl: './registraion-form.component.html',
  styleUrl: './registraion-form.component.scss',
})
export class RegistraionFormComponent implements OnInit {
  public registrationForm: any = FormGroup;
  // public registrationForm: FormGroup;  // "strict": false (tsconfig.json)
  public hobbiesArray: string[] = ['Sport', 'Movie', 'Music'];

  ngOnInit() {
    //  this.registrationForm = new FormGroup({
    //   name : new FormControl('', [Validators.required]),
    //   email : new FormControl('', [Validators.required, Validators.email]),
    //   mobile : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
    //   country : new FormControl('india'),
    //   gender : new FormControl('male'),
    //   hobbies : new FormControl(null),
    //  })
    let mobileRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    this.registrationForm = new FormGroup({
      personalDetails: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        email: new FormControl('', [
          Validators.required,
           Validators.email
        ]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(mobileRegex)
        ]),
      }),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(30)
      ]),
      country: new FormControl(''),
      gender: new FormControl(''),
      hobbies: new FormArray([new FormControl([], 
        // Validators.required
      )]),
      skills: new FormArray([new FormControl(null, 
        // Validators.required
      )]),
    });

    //  this.registrationForm.setValue({
    //   personalDetails:{
    //     name:'',
    //     email:'',
    //     mobile:''
    //   },
    //   country : 'india',
    //   gender : 'male',
    //   hobbies : '',
    //  })

    this.registrationForm.patchValue({
      country: 'india',
      gender: 'male',
    });
  }

  submit() {
    console.log('this.registrationForm', this.registrationForm.value);
    // setTimeout(() => {
    //   this.registrationForm.reset({  country : 'india',  gender : 'male',});
    // }, 1000);
  }

  addSkills() {
    // (<FormArray>this.registrationForm.get('skills')).push(new FormControl(null, Validators.required));
    this.registrationForm
      .get('skills')
      .push(new FormControl(null, 
        Validators.required
      ));
  }

  getHobby(data: any) {
    const isChecked = data.target.checked;
    const checkedValue = data.target.value;
    const checkedArray = this.registrationForm.get('hobbies') as FormArray;
    if (isChecked == true) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      checkedArray.controls.forEach((element, index) => {
        if (element.value == checkedValue) {
          checkedArray.removeAt(index);
        }
      });
    }
  }
}
