import { HeaderBox } from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Matheus",
    lastName: "Zago",
    email: "matheusbes@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.34}
          />
        </header>
        recent transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          {
            currentBalance: 123.5,
          },
          {currentBalance: 123.5,},
        ]}
      />
    </section>
  );
}

export default Home;
