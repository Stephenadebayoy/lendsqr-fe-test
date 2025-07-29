/** @format */

import type { UserInterface } from "../../../../../../types/types";

const UserInfoCard = ({ user }: { user: UserInterface }) => {
  return (
    <div className="user-card">
      <section className="avatar-details">
        <div className="avatar">
          <img src="https://i.pravatar.cc/100" alt="user avatar" />
        </div>
        <div className="info">
          <h3>{user?.fullName}</h3>
          <p>LSQFf587g90</p>
        </div>
      </section>
      <div className="divider" />

      <div className="tier">
        <p>User’s Tier</p>
        <span>★ ☆ ☆</span>
      </div>
      <div className="divider" />

      <div className="amount">
        <h3>₦200,000.00</h3>
        <p>9912345678/Providus Bank</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
