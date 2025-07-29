/** @format */

interface InputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  active: boolean;
  id?: string;
}

interface SectionItem {
  section: string;
  items: MenuItem[];
}

type SidebarItem = MenuItem | SectionItem;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
type User = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
};

export interface UserInterface {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residenceType: string;
  status: "active" | "inactive" | "blacklisted" | "pending";
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}
