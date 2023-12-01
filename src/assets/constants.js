import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import RichTextField from "../components/RichTextField";
import { inputStyle } from "./styles";

export const bankServices = [
  {
    id: 1,
    title: "Credit Cards",
    category: "Payment Solutions",
    description:
      "Access to credit for purchases with various rewards and benefits.",
    color: "#3FA1DA",
  },
  {
    id: 2,
    title: "Personal Loans",
    category: "Loans",
    description:
      "Borrow money for personal needs with flexible repayment options.",
    color: "#0E416B80",
  },
  {
    id: 3,
    title: "Business Checking Accounts",
    category: "Digital Services",
    description:
      "Tailored accounts for managing business finances efficiently.",
    color: "#0E416B",
  },
  {
    id: 4,
    title: "Investment Advisory",
    category: "Investments",
    description:
      "Professional guidance on investment opportunities and strategies.",
    color: "#3FA1DA",
  },
  {
    id: 5,
    title: "Retirement Planning",
    category: "Financial Planning",
    description: "Services to help plan and secure a comfortable retirement.",
    color: "#0E416B80",
  },
  {
    id: 6,
    title: "Student Loans",
    category: "Loans",
    description: "Financial aid for education with manageable repayment plans.",
    color: "#0E416B",
  },
  {
    id: 7,
    title: "Mobile Wallet",
    category: "Digital Services",
    description:
      "Securely store payment information on your smartphone for easy transactions.",
    color: "#3FA1DA",
  },
  {
    id: 8,
    title: "Wealth Management",
    category: "Investments",
    description:
      "Comprehensive services for high-net-worth individuals to manage and grow their wealth.",
    color: "#0E416B80",
  },
  {
    id: 9,
    title: "Home Equity Line of Credit (HELOC)",
    category: "Loans",
    description:
      "Access funds by leveraging your home’s equity for various financial needs.",
    color: "#0E416B",
  },
  {
    id: 10,
    title: "Automated Bill Payments",
    category: "Digital Services",
    description:
      "Set up recurring payments for bills, ensuring timely payments automatically.",
    color: "#3FA1DA",
  },
];
export const categories = [
  "Loans",
  "Digital Services",
  "Investments",
  "Digital Services",
];

export const serviceCatagory = [
  { title: "Loans", avaiableServices: "1" },
  { title: "Digital Services", avaiableServices: "5" },
  { title: "Investments", avaiableServices: "4" },
  { title: "Financial Planning", avaiableServices: "3" },
];
export const serviceTypes = ["Business Banking", "Business Support"];
export const additionInformationNavigation = [
  "Service Features",
  "Service Dependency",
  "Service Support",
  "Service Trail",
];
export const businessDetails = [
  { title: "Business Contacts", description: "Mohamad Abdin" },
  { title: "Business Priority ", description: "Mohamad Abdin" },
  { title: "Business Owner", description: "Mohamad Abdin" },
  { title: "IT Service Owner(s)", description: "Mohamad Abdin" },
  { title: "IT Contact ", description: "Mohamad Abdin" },
];
export const subServicesName = [
  {
    title: "sub service name",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "sub service name",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "sub service name",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];
export const linkedServicesList = [
  {
    title: "Linked Service Name",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Linked Service Name",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Linked Service Name",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];
