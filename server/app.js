const express = require("express");
const cors = require("cors");
const pgPool = require("./db");
const app = express();
const PORT = 4300;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
// customer crud

// get user loan by id
app.get("/get-user-loans/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await pgPool.query(
      "SELECT * FROM userloans WHERE loan_id=$1",
      [id]
    );
    res.json({
      message: "Loan retrieved successfully",
      status: 200,
      data: loan.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});
// create loan application
app.post("/loan-application", async (req, res) => {
  try {
    const {
      customername,
      customerphonenumber,
      loanapplicationdate,
      loanpurpose,
      loanamount,
      loanstatus,
    } = req.body;
    const newLoan = await pgPool.query(
      "INSERT INTO userloans(customername, customerphonenumber, loanapplicationdate, loanpurpose, loanamount, loanstatus) VALUES($1, $2, $3, $4, $5, $6)",
      [
        customername,
        customerphonenumber,
        loanapplicationdate,
        loanpurpose,
        loanamount,
        loanstatus,
      ]
    );
    res.json(newLoan.rows);
  } catch (error) {
    console.error(error.message);
  }
});
// stage application

// ADMIN CRUD
// get users loans
app.get("/get-user-loans", async (req, res) => {
  try {
    const allLoans = await pgPool.query("SELECT * FROM userloans");
    res.json({
      message: "loans retrieved successfully",
      status: 200,
      data: allLoans.rows,
    });
  } catch (err) {
    console.error(err.message);
  }
});

// get loans by filters(new, approved, rejected, flagged(defaulters))

app.get("/get-user-loans-by-status/:statusId", async (req, res) => {
  try {
    const { statusId } = req.params;
    const loanByStatus = await pgPool.query(
      "SELECT * FROM userloans WHERE loanstatus = $1",
      [statusId]
    );
    res.json({
      message: "loans by status retrieved successfully",
      status: 200,
      data: loanByStatus.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});
// get loan by id
app.get("/get-user-loans-by-id/:id", async (req, res) => {
  try {
    const loanById = await pgPool.query("SELECT * FROM userloans");
    res.json({
      message: "All loans retrieved successfully",
      status: 200,
      data: loanById.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});
// update loan status

app.put("/approve-loan-by-id/:id", async (req, res) => {
  try {
    const { loanstatus } = req.body;
    const { id } = req.params;
    const updateLoanStatus = await pgPool.query(
      "UPDATE userloans SET loanstatus=$1 WHERE loan_id=$2",
      [loanstatus, id]
    );
    res.json({
      message: "Updated loan status successfully",
      status: 200,
      data: updateLoanStatus.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});
// generate repayment schedule

// ***** disbursement page ******
// get all approved loans
app.get("/get-user-loans-by-status/:statusId", async (req, res) => {
  const approvedLoansForDisbursement = await pgPool.query(
    "SELECT * FROM userloans WHERE loanstatus = 3"
  );
  res.json({
    message: "all approved loans retrieved successfully",
    status: 200,
    data: approvedLoansForDisbursement.rows,
  });
});
// post transactions to cbs
app.put("/finalize-loan/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { loanstatus } = req.body;

    const finalizeLoanApplication = await pgPool.query(
      "UPDATE userloans SET loanstatus=$1 WHERE loan_id=$2",
      [loanstatus, id]
    );
    res.json({
      message: "loan application finalized succesfully",
      status: 200,
      data: finalizeLoanApplication.rows,
    });
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () =>
  console.log(`Loan disbursement app running on PORT: ${PORT}`)
);
