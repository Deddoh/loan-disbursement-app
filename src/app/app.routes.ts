import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: "",
        component: DashboardComponent
    },
    {
        path: "loans",
        loadChildren: () => import("./components/loans/loans.module").then(m => m.LoansModule),
        data: {
            breadcrumb: "Loans"
        }


    }
];
