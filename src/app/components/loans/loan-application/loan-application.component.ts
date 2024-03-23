import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss'
})
export class LoanApplicationComponent implements OnInit {
  data: any = []
  constructor(private httpService: HttpService) {

  }

  getAllLoans() {
    this.httpService.getUserLoans("get-user-loans").subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
  }

  ngOnInit() {
this.getAllLoans()
  }

}
