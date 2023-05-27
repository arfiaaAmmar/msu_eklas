import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import appRoutes from "../../routes/routes";
import { Typography } from "@mui/material";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sidebar, setSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const open = Boolean(anchorEl);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      appRoutes.filter((route) => {
        return route.sidebarProps?.displayText.match(searchInput);
      });
    }
  };

  return (
    <>
      <div className="flex fixed top-0 w-full flex-row items-center justify-between p-2 shadow-md bg-neutral-800 z-10">
        <IconButton onClick={() => setSidebar(!sidebar)}>
          <MenuIcon className="text-center text-white my-auto" />
        </IconButton>
        <input
          type="search"
          title="SearchBox"
          onChange={handleSearch}
          value={searchInput}
          placeholder="Search EKLAS"
          className="rounded-2xl h-8 my-auto ml-0 mr-auto bg-neutral-100 p-2"
        />
        <div className="flex items-center gap-2 bg-neutral-300 rounded-full p-2 py-0 h-8">
          <Typography className="text-[0.9rem]">RM50</Typography>
          <AccountBalanceWalletIcon className="p-0" />
        </div>
      </div>
      {sidebar == true ? (
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      ) : null}
    </>
  );
};
