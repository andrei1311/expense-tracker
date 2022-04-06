import React from "react";
import { Card, Button  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { logoutInitiate } from "../../redux/actions";
import '../../App.css';
import { Balance } from "../../components/Balance/Balance";
import { IncomeExpenses } from "../../components/Income/IncomeExpenses";
import { TransactionList } from "../../components/Transactions/TransactionList";
import { AddTransaction } from "../../components/Transactions/AddTransaction";

import { GlobalProvider } from "../../context/GlobalState";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <GlobalProvider>
		<Header />
		<div className="container">
			<Balance />
			<IncomeExpenses />
			<TransactionList />
			<AddTransaction />
		</div>
		<Button className="btn btn-danger" size="sm" onClick={handleAuth}>
        Logout
      </Button>
    </GlobalProvider>
  );
};

export default Home;
