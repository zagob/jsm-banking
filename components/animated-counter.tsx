"use client";

import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <p className="w-full">
      <CountUp
        decimal=","
        prefix="$"
        duration={2.75}
        decimals={2}
        end={amount}
      />
    </p>
  );
}

export default AnimatedCounter;
