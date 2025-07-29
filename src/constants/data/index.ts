/** @format */

import {
  Users,
  UserCheck,
  CreditCard,
  Settings,
  PiggyBank,
  FileText,
  UserCog,
  Building,
  Calculator,
  RefreshCw,
  Headphones,
  MapPin,
  BarChart3,
  Sliders,
  Activity,
} from "lucide-react";
import { IoBriefcase } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import type { SidebarItem, User } from "../../types/types";

export const menuItems: SidebarItem[] = [
  { icon: IoBriefcase, label: "Switch Organization", active: false, id: "1" },
  { icon: FaHome, label: "Dashboard", active: false, id: "2" },

  {
    section: "CUSTOMERS",
    items: [
      { icon: Users, label: "Users", active: true, id: "3" },
      { icon: UserCheck, label: "Guarantors", active: false, id: "4" },
      { icon: CreditCard, label: "Loans", active: false, id: "5" },
      { icon: Settings, label: "Decision Models", active: false, id: "6" },
      { icon: PiggyBank, label: "Savings", active: false, id: "7" },
      { icon: FileText, label: "Loan Requests", active: false, id: "8" },
      { icon: UserCheck, label: "Whitelist", active: false, id: "9" },
      { icon: UserCog, label: "Karma", active: false, id: "10" },
    ],
  },
  {
    section: "BUSINESSES",
    items: [
      { icon: Building, label: "Organization", active: false, id: "11" },
      { icon: CreditCard, label: "Loan Products", active: false, id: "12" },
      { icon: PiggyBank, label: "Savings Products", active: false, id: "13" },
      { icon: Calculator, label: "Fees and Charges", active: false, id: "14" },
      { icon: RefreshCw, label: "Transactions", active: false, id: "15" },
      { icon: Headphones, label: "Services", active: false, id: "16" },
      { icon: UserCog, label: "Service Account", active: false, id: "17" },
      { icon: MapPin, label: "Settlements", active: false, id: "18" },
      { icon: BarChart3, label: "Reports", active: false, id: "19" },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      { icon: Sliders, label: "Preferences", active: false, id: "20" },
      { icon: Calculator, label: "Fees and Pricing", active: false, id: "21" },
      { icon: Activity, label: "Audit Logs", active: false, id: "22" },
    ],
  },
];

export const usersData: User[] = [
  {
    id: "1",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    id: "2",
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby2@irorun.com",
    phone: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
  {
    id: "3",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    id: "4",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone: "07003309226",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Pending",
  },
  {
    id: "5",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    id: "6",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Active",
  },
  {
    id: "7",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    id: "8",
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phone: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    id: "9",
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Inactive",
  },
];
