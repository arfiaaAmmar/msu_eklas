import { useState } from "react";
import { To, useNavigate } from "react-router-dom";

type TabProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Tab: React.FC<TabProps> = ({ label, active = false, onClick }) => {
  return (
    <div className="flex flex-col" onClick={onClick}>
      <p>{label}</p>
      <div
        className={`${active ? "bg-red-600" : ""} rounded h-1
      `}
      ></div>
    </div>
  );
};

type TabNavProps = {
  tabs: { label: string; path:To; content: React.ReactNode }[];
};

const TabNav: React.FC<TabNavProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate()

  const handleTabClick = (index: number, path:To) => {
    setActiveTab(index);
    navigate(path)
  };

  return (
    <div className="w-full">
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={tab.label}
            active={activeTab === index}
            onClick={() => handleTabClick(index, tab.path!)}
          />
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabNav;
