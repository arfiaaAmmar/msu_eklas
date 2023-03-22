import { AddCircle } from "@mui/icons-material";
import { Button, ClickAwayListener } from "@mui/material";
import { motion } from "framer-motion";
import { ActionButtonItems } from "./ActionButtonItems";

export const ActionButton = ({
  actionBtn,
  setActionBtn,
}: {
  actionBtn: boolean;
  setActionBtn: Function;
}) => {
  const handleClick = () => {
    setActionBtn(!actionBtn);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setActionBtn(false)}>
        <Button className="m-auto text-center w-full" centerRipple>
          <motion.div
            animate={{
              rotate: actionBtn ? 45 : 0,
            }}
          >
            <AddCircle
              className={`text-5xl m-auto ${
                actionBtn ? "rotate-45 text-gray-400" : "text-white"
              }`}
              onClick={handleClick}
            />
          </motion.div>
          {actionBtn ? <ActionButtonItems /> : null}
        </Button>
      </ClickAwayListener>
    </>
  );
};

export default ActionButton;
