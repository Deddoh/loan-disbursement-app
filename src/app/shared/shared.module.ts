import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../components/auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


// material imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


import {routes} from './../app.routes'
@NgModule({

    imports: [
        CommonModule,
        // BrowserModule,
        // BrowserAnimationsModule,
        FormsModule,
        // RouterModule.forRoot(routes),
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        FormsModule,

        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class SharedModule { }
