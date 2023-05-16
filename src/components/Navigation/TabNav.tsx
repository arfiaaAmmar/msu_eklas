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

export type TabNavProps = {
  tabs: { label: string; path:To; content?: React.ReactNode }[];
  contentPosition: "top" | "bottom"
  className?: string
};

const TabNav: React.FC<TabNavProps> = ({ tabs, contentPosition, className }) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate()

  const handleTabClick = (index: number, path:To) => {
    setActiveTab(index);
    navigate(path)
  };

  return (
    <div className={`w-full ${className}`}>
      { contentPosition == 'top' ? <div className="mt-4">{tabs[activeTab].content}</div> : null}
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
      { contentPosition == 'bottom' ? <div className="mt-4">{tabs[activeTab].content}</div> : null }
    </div>
  );
};

export default TabNav;
