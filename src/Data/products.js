const products = [
  {
    id: 1,
    title: "Akiba Account",
    type: "Current Account",

    overview:
      "Ideal for members who need a convenient account for everyday banking and transactions.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 500",
      },
      {
        label: "Monthly Fee",
        value: "KSh 60",
      },
      {
        label: "Loan Limit",
        value: "Up to KSh 500,000",
      },
      {
        label: "Documents",
        value: "3 Required",
      },
    ],

    documents: [
      "Copy of National ID",
      "Copy of KRA PIN",
      "One passport-size photograph",
    ],

    details: [
      "Eligible for unsecured loans up to KSh 500,000 subject to credit assessment.",
      "Loans above KSh 500,000 require acceptable security.",
      "Loan eligibility depends on account performance and transaction history.",
    ],
  },

  {
    id: 2,
    title: "Boresha Account",
    type: "Current Account",

    overview:
      "A current account designed for members who maintain a higher balance and prefer zero monthly ledger fees.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 2,000",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
      {
        label: "Loan Limit",
        value: "Up to KSh 500,000",
      },
      {
        label: "Documents",
        value: "3 Required",
      },
    ],

    documents: [
      "Copy of National ID",
      "Copy of KRA PIN",
      "One passport-size photograph",
    ],

    details: [
      "No monthly ledger fees.",
      "Eligible for unsecured loans up to KSh 500,000 subject to credit assessment.",
      "Higher loan amounts require acceptable security.",
    ],
  },

  {
    id: 3,
    title: "Jijenge Account",
    type: "Savings Account",

    overview:
      "A long-term savings account that rewards disciplined saving while giving members access to larger loan facilities.",

    quickFacts: [
      {
        label: "Withdrawals",
        value: "2 Months Notice",
      },
      {
        label: "Loan Limit",
        value: "4–5× Savings",
      },
      {
        label: "Interest",
        value: "Up to 9%",
      },
      {
        label: "Documents",
        value: "3 Required",
      },
    ],

    documents: [
      "Copy of National ID",
      "Copy of KRA PIN",
      "One passport-size photograph",
    ],

    details: [
      "Savings up to KSh 1,000,000 earn 7.5% annually.",
      "Savings between KSh 1,000,001 and KSh 2,000,000 earn 8% annually.",
      "Savings above KSh 2,000,000 earn 9% annually.",
      "Withdrawals require a withdrawal request and a two-month notice period.",
      "Loans above the member's savings require guarantors and/or acceptable security.",
    ],
  },

  {
    id: 4,
    title: "K-Unity Shares",
    type: "Share Capital",

    overview:
      "Become a shareholder of K-Unity SACCO and earn dividends declared from the SACCO's annual performance.",

    quickFacts: [
      {
        label: "Minimum Shares",
        value: "KSh 6,000",
      },
      {
        label: "Price Per Share",
        value: "KSh 300",
      },
      {
        label: "Returns",
        value: "Dividends",
      },
      {
        label: "Transfer",
        value: "Sell to Others",
      },
    ],

    documents: [],

    details: [
      "Minimum share capital is KSh 6,000.",
      "Each share is valued at KSh 300.",
      "Shares cannot be redeemed by the SACCO but may be sold or transferred to another buyer.",
      "Dividend rates depend on the SACCO's annual financial performance.",
      "Contact the branch for share purchase requirements.",
    ],
  },
];

export default products;