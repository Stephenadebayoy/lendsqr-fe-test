/** @format */

import "./style.scss";
import Section from "./section";
import Tabs from "../components/user-tabs";
import UserInfoCard from "../components/card-info";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useUsers from "../../../../../hooks/useUsers";

const UserDetailsPage = () => {
  const { users } = useUsers();
  const { id } = useParams();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-details-container">
      <div className="top-header">
        <a href="/users" className="back-link">
          <FaLongArrowAltLeft size={20} /> Back to Users
        </a>
        <div className="actions">
          <button className="btn btn-danger">Blacklist User</button>
          <button className="btn btn-success">Activate User</button>
        </div>
      </div>

      <section className="card-tabs-info">
        <UserInfoCard user={user} />
        <Tabs />
      </section>

      <div className="sections">
        <Section
          title="Personal Information"
          data={{
            "Full Name": user.fullName ?? "N/A",
            "Phone Number": user.phoneNumber ?? "N/A",
            "Email Address": user.email ?? "N/A",
            BVN: user.bvn ?? "N/A",
            Gender: user.gender ?? "N/A",
            "Marital Status": user.maritalStatus ?? "N/A",
            Children: user.children ?? "N/A",
            "Type of Residence": user.residenceType ?? "N/A",
          }}
        />
        <div className="dividers" />

        <Section
          title="Education and Employment"
          data={{
            "Level of Education": user.education?.level ?? "N/A",
            "Employment Status": user.education?.employmentStatus ?? "N/A",
            "Sector of Employment": user.education?.sector ?? "N/A",
            "Duration of Employment": user.education?.duration ?? "N/A",
            "Office Email": user.education?.officeEmail ?? "N/A",
            "Monthly Income":
              user.education?.monthlyIncome?.join(" - ") ?? "N/A",
            "Loan Repayment": user.education?.loanRepayment ?? "N/A",
          }}
        />
        <div className="dividers" />

        <Section
          title="Socials"
          data={{
            Twitter: user.socials?.twitter ?? "N/A",
            Facebook: user.socials?.facebook ?? "N/A",
            Instagram: user.socials?.instagram ?? "N/A",
          }}
        />
        <div className="dividers" />

        <Section
          title="Guarantor"
          data={{
            "Full Name": user.guarantor?.fullName ?? "N/A",
            "Phone Number": user.guarantor?.phoneNumber ?? "N/A",
            "Email Address": user.guarantor?.email ?? "N/A",
            Relationship: user.guarantor?.relationship ?? "N/A",
          }}
        />
        <div className="dividers" />

        {/* <Section
          title="Guarantor 2"
          data={{
            "Full Name": user.guarantor2?.fullName ?? "N/A",
            "Phone Number": user.guarantor2?.phoneNumber ?? "N/A",
            "Email Address": user.guarantor2?.email ?? "N/A",
            Relationship: user.guarantor2?.relationship ?? "N/A",
          }}
        /> */}
      </div>
    </div>
  );
};

export default UserDetailsPage;
