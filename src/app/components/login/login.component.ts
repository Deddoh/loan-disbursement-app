import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  returnUrl: string = '';
  disableButton: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    })

    if (authService.checkToken()) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get('retrunUrl') || '/';
  }
  forgotPwd(){}

  OnSubmit(formValues:any) {
    this.authService.login("login", formValues)
      .pipe(first())
      .subscribe(
        (res:any) => {
          if (res.status == 200) {
            this.router.navigateByUrl(this.returnUrl)
          }

          return this.router.navigate(['/']);
        }
      )
  }


}
