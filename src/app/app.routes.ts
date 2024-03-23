import { LoanApplicationComponent } from './components/loans/loan-application/loan-application.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: "",
        component: DashboardComponent
    },
    {
        path: "loans",
        loadComponent: () => import("../app/components/loans/loan-application/loan-application.component").then(m => m.LoanApplicationComponent),
        data: {
            breadcrumb: "Loans"
        }


    }
];
