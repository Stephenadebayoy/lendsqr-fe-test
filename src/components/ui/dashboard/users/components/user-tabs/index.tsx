/** @format */

const Tabs = () => {
  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${tab === "General Details" ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
