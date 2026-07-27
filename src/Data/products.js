const products = [
  {
    id: 1,
    title: "Akiba Account",
    category: "Accounts",
    subcategory: "Current Accounts",
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
      "Access to ATM Card, Unicash, PayBill, personal cheque and in-house payment voucher.",
    ],
  },

  {
    id: 2,
    title: "Boresha Account",
    category: "Accounts",
    subcategory: "Current Accounts",
    type: "Current Account",

    overview:
      "Designed for members who maintain higher balances while enjoying zero monthly ledger fees.",

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
      "Annual maintenance fee of KSh 200.",
      "Eligible for unsecured loans up to KSh 500,000 subject to credit assessment.",
      "Higher loan amounts require acceptable security.",
      "Access to ATM Card, Unicash, PayBill and personal cheque.",
    ],
  },

  {
    id: 3,
    title: "Imarisha Account",
    category: "Accounts",
    subcategory: "Current Accounts",
    type: "Current Account",

    overview:
      "Suitable for salaried employees and small business owners who require flexible day-to-day banking.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 110",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
      {
        label: "ATM",
        value: "Available",
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
      "Suitable for both individuals and entrepreneurs.",
      "Access to ATM Card, Unicash and PayBill services.",
    ],
  },

  {
    id: 4,
    title: "Jijenge Account",
    category: "Accounts",
    subcategory: "Savings Accounts",
    type: "Savings Account",

    overview:
      "A long-term savings account that rewards disciplined saving while giving members access to larger loan facilities.",

    quickFacts: [
      {
        label: "Withdrawals",
        value: "60 Days Notice",
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
      "Savings from KSh 1,000,001 to KSh 2,000,000 earn 8% annually.",
      "Savings above KSh 2,000,000 earn 9% annually.",
      "Minimum monthly contribution of KSh 300.",
      "No monthly ledger fees.",
      "Deposits withdrawn during the year do not earn interest.",
      "Withdrawals require a written request and a 60-day notice period.",
      "Members may qualify for loans of up to 4–5 times their savings, subject to guarantors or acceptable security.",
    ],
  },

  {
    id: 5,
    title: "School Fees Account",
    category: "Accounts",
    subcategory: "Savings Accounts",
    type: "Savings Account",

    overview:
      "Helps parents and guardians save gradually for school fees throughout the year.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 500",
      },
      {
        label: "Withdrawals",
        value: "3 Per Year",
      },
      {
        label: "Monthly Fee",
        value: "None",
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
      "Three free bankers' cheques each year.",
      "Parents or guardians operate the account until the child reaches the age of majority.",
    ],
  },

  {
    id: 6,
    title: "Watoto Account",
    category: "Accounts",
    subcategory: "Savings Accounts",
    type: "Savings Account",

    overview:
      "Encourages children to develop a saving culture from an early age.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 500",
      },
      {
        label: "Withdrawals",
        value: "3 Per Year",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
      {
        label: "Documents",
        value: "3 Required",
      },
    ],

    documents: [
      "Copy of Parent/Guardian ID",
      "Copy of KRA PIN",
      "Passport-size photograph",
    ],

    details: [
      "Operated by a parent or guardian until the child reaches the age of majority.",
    ],
  },

  {
    id: 7,
    title: "Holiday Savings Account",
    category: "Accounts",
    subcategory: "Savings Accounts",
    type: "Savings Account",

    overview:
      "Designed for members planning and saving towards holidays and vacations.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 110",
      },
      {
        label: "Weekly Savings",
        value: "KSh 250",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
    ],

    documents: [
      "Copy of National ID",
      "Copy of KRA PIN",
      "One passport-size photograph",
    ],

    details: [
      "Access to negotiated holiday packages.",
    ],
  },

  {
    id: 8,
    title: "Shirika Savings Account",
    category: "Accounts",
    subcategory: "Savings Accounts",
    type: "Savings Account",

    overview:
      "Designed for societies, organizations and registered groups.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 500",
      },
      {
        label: "Monthly Fee",
        value: "KSh 300",
      },
      {
        label: "Target",
        value: "Organizations",
      },
    ],

    documents: [],

    details: [
      "Society management may apply for a personal cheque.",
    ],
  },

  {
    id: 9,
    title: "MFI Member Savings",
    category: "Accounts",
    subcategory: "Savings Accounts",
    type: "Savings Account",

    overview:
      "Savings product designed for members participating in microfinance groups.",

    quickFacts: [
      {
        label: "Weekly Savings",
        value: "KSh 300",
      },
      {
        label: "Loan Limit",
        value: "4× Savings",
      },
      {
        label: "Training",
        value: "Annual",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
    ],

    documents: [],

    details: [
      "Free annual financial literacy training.",
      "Members qualify for loans up to four times their savings.",
      "Savings are withdrawable upon leaving the group and clearing co-guarantee obligations.",
    ],
  },

  {
    id: 10,
    title: "Chama Savings",
    category: "Accounts",
    subcategory: "Group Accounts",
    type: "Savings Account",

    overview:
      "Designed for registered investment groups and chamas.",

    quickFacts: [
      {
        label: "Minimum Balance",
        value: "KSh 2,000",
      },
      {
        label: "Annual Fee",
        value: "KSh 100",
      },
      {
        label: "Withdrawal Fee",
        value: "KSh 100",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
    ],

    documents: [],

    details: [
      "Suitable for registered groups.",
      "Withdrawal fee of KSh 100 per transaction.",
    ],
  },

  {
    id: 11,
    title: "Benevolent Fund",
    category: "Accounts",
    subcategory: "Special Funds",
    type: "Member Benefit",

    overview:
      "Provides financial support to members and their families during bereavement.",

    quickFacts: [
      {
        label: "Individual",
        value: "KSh 600/Year",
      },
      {
        label: "Couple",
        value: "KSh 1,200/Year",
      },
      {
        label: "Minimum Balance",
        value: "None",
      },
      {
        label: "Monthly Fee",
        value: "None",
      },
    ],

    documents: [],

    details: [
      "Annual contribution-based member support fund.",
    ],
  },  {
    id: 12,
    title: "Salary Loan (Unsecured)",
    category: "Loans",
    subcategory: "Salary Loans",
    type: "Unsecured Loan",

    overview:
      "A loan designed for salaried employees without the need for tangible security.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 500,000",
      },
      {
        label: "Repayment",
        value: "Up to 36 Months",
      },
      {
        label: "Security",
        value: "Not Required",
      },
      {
        label: "Interest",
        value: "Reducing Balance",
      },
    ],

    documents: [
      "National ID",
      "Recent Payslip",
      "Employer Introduction Letter (where applicable)",
    ],

    details: [
      "Available to salaried employees.",
      "Loans below KSh 300,000 repayable over a maximum of 24 months.",
      "Loans above KSh 300,000 repayable over a maximum of 36 months.",
      "Maximum facility of KSh 500,000.",
      "Must satisfy the statutory two-thirds salary rule.",
      "No tangible security required.",
      "Minimum Jijenge monthly contribution of KSh 500.",
      "One-time Jijenge deduction of 2% of the approved loan.",
      "Borrowers taking KSh 500,000 should maintain at least KSh 50,000 in Jijenge savings.",
    ],
  },

  {
    id: 13,
    title: "Salary Loan (Secured)",
    category: "Loans",
    subcategory: "Salary Loans",
    type: "Secured Loan",

    overview:
      "Large salary-backed loan secured by acceptable collateral.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 10 Million",
      },
      {
        label: "Repayment",
        value: "84 Months",
      },
      {
        label: "Security",
        value: "Required",
      },
      {
        label: "Interest",
        value: "Reducing Balance",
      },
    ],

    documents: [
      "National ID",
      "Payslip",
      "Security Documents",
    ],

    details: [
      "Available to salaried employees.",
      "Maximum loan amount of KSh 10 million.",
      "Maximum repayment period of 84 months.",
      "Must satisfy the statutory two-thirds rule.",
      "Security may include land titles, motor vehicles or fixed deposits.",
      "Check-off borrowers contribute at least KSh 500 monthly to Jijenge.",
      "Non-check-off borrowers contribute at least KSh 1,000 monthly.",
    ],
  },

  {
    id: 14,
    title: "Salary Advance",
    category: "Loans",
    subcategory: "Salary Loans",
    type: "Advance",

    overview:
      "Short-term advance against expected monthly salary.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 300,000",
      },
      {
        label: "Repayment",
        value: "3 Months",
      },
      {
        label: "Advance",
        value: "2/3 Net Pay",
      },
    ],

    documents: [],

    details: [
      "Available to salaried employees and pensioners.",
      "Advance of up to two-thirds of expected monthly net salary.",
      "Maximum repayment period of three months.",
    ],
  },

  {
    id: 15,
    title: "Kilimo Loan",
    category: "Loans",
    subcategory: "Agriculture",
    type: "Unsecured Agricultural Loan",

    overview:
      "Supports farmers and agricultural businesses with production financing.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 500,000",
      },
      {
        label: "Interest",
        value: "15%",
      },
      {
        label: "Repayment",
        value: "Up to 36 Months",
      },
      {
        label: "Security",
        value: "Not Required",
      },
    ],

    documents: [],

    details: [
      "Available to agriculture-based businesses.",
      "Loans below KSh 300,000 repayable within 24 months.",
      "Loans above KSh 300,000 repayable within 36 months.",
      "Interest charged on a reducing balance.",
      "Minimum Jijenge contribution of KSh 500 monthly.",
      "One-time deduction of 2% of the approved loan.",
      "Must satisfy the statutory two-thirds rule.",
    ],
  },

  {
    id: 16,
    title: "Kilimo Loan (Secured)",
    category: "Loans",
    subcategory: "Agriculture",
    type: "Secured Agricultural Loan",

    overview:
      "Long-term financing for larger agricultural investments.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 50 Million",
      },
      {
        label: "Repayment",
        value: "84 Months",
      },
      {
        label: "Security",
        value: "Required",
      },
      {
        label: "Interest",
        value: "Reducing Balance",
      },
    ],

    documents: [],

    details: [
      "Available to agriculture-based operations.",
      "Maximum repayment period of 84 months.",
      "Minimum Jijenge contribution of KSh 1,000 monthly.",
      "Loans up to KSh 5 million attract a 3% appraisal fee.",
      "Loans above KSh 5 million attract a 2% appraisal fee.",
      "Must satisfy the statutory two-thirds rule.",
      "Acceptable security required.",
    ],
  },

  {
    id: 17,
    title: "Mifugo Loan",
    category: "Loans",
    subcategory: "Agriculture",
    type: "Livestock Loan",

    overview:
      "Financing designed for livestock farmers.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 500,000",
      },
      {
        label: "Security",
        value: "Above Limit",
      },
      {
        label: "Interest",
        value: "Reducing Balance",
      },
    ],

    documents: [],

    details: [
      "Available to livestock farmers.",
      "Members qualify after the required operating period.",
      "Loans above KSh 500,000 require security.",
      "Minimum Jijenge contribution of KSh 500 monthly.",
    ],
  },

  {
    id: 18,
    title: "Kilimo Advance",
    category: "Loans",
    subcategory: "Agriculture",
    type: "Advance",

    overview:
      "Short-term advance for dairy and tea farmers awaiting payments.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 300,000",
      },
      {
        label: "Repayment",
        value: "3 Months",
      },
      {
        label: "Advance",
        value: "2/3 Expected Pay",
      },
    ],

    documents: [],

    details: [
      "Available to dairy and tea farmers.",
      "Advance based on expected proceeds.",
      "Maximum repayment period of three months.",
    ],
  },

  {
    id: 19,
    title: "Tea Bonus Advance",
    category: "Loans",
    subcategory: "Agriculture",
    type: "Advance",

    overview:
      "Advance facility against expected tea bonus payments.",

    quickFacts: [
      {
        label: "Eligibility",
        value: "Tea Farmers",
      },
      {
        label: "Repayment",
        value: "24 Months",
      },
      {
        label: "Loan Amount",
        value: "Up to 120%",
      },
    ],

    documents: [],

    details: [
      "Up to 120% of previous tea bonus for a two-year facility.",
      "Up to 85% of previous tea bonus for a one-year facility.",
      "Maximum repayment period of 24 months.",
    ],
  },

  {
    id: 20,
    title: "SME Loan (Unsecured)",
    category: "Loans",
    subcategory: "Business Loans",
    type: "Unsecured Business Loan",

    overview:
      "Business financing for SMEs without collateral.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 500,000",
      },
      {
        label: "Repayment",
        value: "36 Months",
      },
      {
        label: "Security",
        value: "Not Required",
      },
      {
        label: "Interest",
        value: "Reducing Balance",
      },
    ],

    documents: [],

    details: [
      "Available to business enterprises.",
      "Business account should have operated for at least six months.",
      "Minimum Jijenge contribution of KSh 500 monthly.",
      "Maximum repayment period of 36 months.",
    ],
  },

  {
    id: 21,
    title: "SME Loan (Secured)",
    category: "Loans",
    subcategory: "Business Loans",
    type: "Secured Business Loan",

    overview:
      "Large business financing backed by acceptable security.",

    quickFacts: [
      {
        label: "Maximum Loan",
        value: "KSh 50 Million",
      },
      {
        label: "Repayment",
        value: "84 Months",
      },
      {
        label: "Security",
        value: "Required",
      },
      {
        label: "Interest",
        value: "Reducing Balance",
      },
    ],

    documents: [],

    details: [
      "Available to business enterprises.",
      "Business should have operated for at least six months.",
      "Maximum repayment period of 84 months.",
      "Acceptable security required.",
    ],
  },  {
    id: 18,
    title: "SME Loan (Unsecured)",
    category: "Loan Products",
    subCategory: "SME Loans",
    type: "Business Loan",

    overview:
      "An unsecured loan designed for established small and medium-sized enterprises.",

    quickFacts: [
      { label: "Maximum Loan", value: "KSh 500,000" },
      { label: "Repayment", value: "Up to 36 Months" },
      { label: "Security", value: "Not Required" },
      { label: "Eligibility", value: "6 Months Account History" },
    ],

    documents: [],

    details: [
      "Available to business enterprises.",
      "Business account must have operated for at least 6 months.",
      "Minimum Jijenge contribution of KSh 500 per month.",
      "Interest charged on reducing balance.",
    ],
  },

  {
    id: 19,
    title: "SME Loan (Secured)",
    category: "Loan Products",
    subCategory: "SME Loans",
    type: "Business Loan",

    overview:
      "Higher-value financing for businesses backed by acceptable security.",

    quickFacts: [
      { label: "Maximum Loan", value: "KSh 50 Million" },
      { label: "Repayment", value: "Up to 84 Months" },
      { label: "Security", value: "Required" },
      { label: "Eligibility", value: "6 Months Account History" },
    ],

    documents: [],

    details: [
      "Available to business enterprises.",
      "Business account must have operated for at least 6 months.",
      "Acceptable security required.",
      "Interest charged on reducing balance.",
    ],
  },

  {
    id: 20,
    title: "Jijenge Loan",
    category: "Loan Products",
    subCategory: "Savings-Based Loans",
    type: "Secured Loan",

    overview:
      "A loan facility available exclusively to Jijenge Savings Account holders.",

    quickFacts: [
      { label: "Eligibility", value: "Jijenge Members" },
    ],

    documents: [],

    details: [
      "Available to all Jijenge account holders.",
    ],
  },

  {
    id: 21,
    title: "Society Development Loan",
    category: "Loan Products",
    subCategory: "Corporate Loans",
    type: "Development Loan",

    overview:
      "Long-term financing for registered cooperative societies.",

    quickFacts: [
      { label: "Maximum Loan", value: "KSh 50 Million" },
      { label: "Repayment", value: "Up to 60 Months" },
      { label: "Security", value: "Required" },
      { label: "Interest", value: "Reducing Balance" },
    ],

    documents: [],

    details: [
      "Available to registered cooperative societies.",
      "Maximum loan amount of KSh 50 million.",
      "Security required.",
      "Interest charged on reducing balance.",
      "2/3 rule applies where applicable.",
    ],
  },

  {
    id: 22,
    title: "Asset Finance Loan",
    category: "Loan Products",
    subCategory: "Asset Finance",
    type: "Asset Finance",

    overview:
      "Finance the purchase of motor vehicles and other qualifying assets.",

    quickFacts: [
      { label: "Financing", value: "80% of Purchase Price" },
      { label: "Customer Contribution", value: "20%" },
      { label: "Insurance", value: "Comprehensive" },
      { label: "Security", value: "Asset Financed" },
    ],

    documents: [],

    details: [
      "Available to all members.",
      "Customer contributes at least 20% of purchase price.",
      "Asset financed acts as security.",
      "Motor vehicles must be comprehensively insured through MAPA Insurance Agency.",
      "Vehicles valued above KSh 3 million require dual tracking devices.",
      "Joint registration applies for motor vehicles.",
      "Logbook retained by the SACCO until full repayment.",
      "Motor vehicles should generally be less than 8 years old.",
    ],
  },

  {
    id: 23,
    title: "Insurance Premium Financing",
    category: "Loan Products",
    subCategory: "Special Purpose Loans",
    type: "Insurance Loan",

    overview:
      "Finance your insurance premiums without paying the full amount upfront.",

    quickFacts: [
      { label: "Repayment", value: "Up to 10 Months" },
      { label: "Eligibility", value: "All Customers" },
    ],

    documents: [],

    details: [
      "Available to all customers.",
      "Loan specifically intended for insurance premium payments.",
    ],
  },

  {
    id: 24,
    title: "Trade Financing",
    category: "Loan Products",
    subCategory: "Business Finance",
    type: "Trade Finance",

    overview:
      "Working capital facilities including invoice discounting, LPO financing, and performance bonds.",

    quickFacts: [
      { label: "Unsecured Limit", value: "Up to KSh 500,000" },
      { label: "Security", value: "Above KSh 500,000" },
      { label: "Facilities", value: "LPO / Invoice" },
    ],

    documents: [],

    details: [
      "Includes LPO financing.",
      "Invoice discounting available.",
      "Performance bonds supported.",
      "Facilities above KSh 500,000 require security.",
    ],
  },

  {
    id: 25,
    title: "Business Overdraft",
    category: "Loan Products",
    subCategory: "Business Finance",
    type: "Overdraft",

    overview:
      "Flexible overdraft facility for businesses with consistent account turnover.",

    quickFacts: [
      { label: "Eligibility", value: "Business Accounts" },
      { label: "Monthly Turnover", value: "KSh 100,000+" },
      { label: "Security", value: "Required" },
    ],

    documents: [],

    details: [
      "Available to business enterprises.",
      "Monthly account turnover should exceed KSh 100,000.",
      "Acceptable security required.",
    ],
  },

  {
    id: 26,
    title: "Group Microfinance Loan",
    category: "Loan Products",
    subCategory: "Group Loans",
    type: "Group Loan",

    overview:
      "Microfinance loan facility for registered organized groups.",

    quickFacts: [
      { label: "Loan Limit", value: "4× Savings" },
      { label: "Repayment", value: "Up to 36 Months" },
      { label: "Eligibility", value: "6 Weeks Operation" },
      { label: "Interest", value: "Reducing Balance" },
    ],

    documents: [],

    details: [
      "Available to registered organized groups.",
      "Loans available after 6 weeks of operation.",
      "Minimum monthly savings of KSh 1,500 or KSh 300 weekly.",
      "Loan amount up to four times group savings.",
      "Interest charged on reducing balance.",
    ],
  },

  {
    id: 27,
    title: "Chama Asset Acquisition Loan",
    category: "Loan Products",
    subCategory: "Group Loans",
    type: "Group Loan",

    overview:
      "Financing for registered investment groups purchasing long-term assets.",

    quickFacts: [
      { label: "Eligibility", value: "6 Months Operation" },
      { label: "Minimum Members", value: "5" },
      { label: "Security", value: "Required" },
      { label: "Lending Basis", value: "90% Contributions" },
    ],

    documents: [],

    details: [
      "Available to registered Chamas.",
      "Group should have operated for at least 6 months.",
      "Minimum of 5 members.",
      "Financing considers up to 90% of group contributions.",
      "Security required.",
      "Interest charged on reducing balance.",
    ],
  },  {
    id: 29,
    title: "UniLoan",
    category: "Loans",
    subcategory: "Digital Loans",
    type: "Mobile Loan",

    overview:
      "Instant mobile loan accessible through the UniCash platform.",

    quickFacts: [
      {
        label: "Access",
        value: "UniCash",
      },
      {
        label: "Category",
        value: "Digital Loan",
      },
    ],

    documents: [],

    details: [
      "Available through the UniCash mobile platform.",
      "Subject to SACCO lending terms and eligibility requirements.",
    ],
  },
];

export default products;