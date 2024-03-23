CREATE DATABASE loandisbursementapp;

CREATE TABLE userloans(
    loan_id SERIAL PRIMARY KEY,
    customername VARCHAR(255),
    customerphone VARCHAR(255),
    loanapplicationdate VARCHAR(255),
    loanpurpose VARCHAR(255),
    loanamount VARCHAR(255),
    loanstatus VARCHAR(255)
);