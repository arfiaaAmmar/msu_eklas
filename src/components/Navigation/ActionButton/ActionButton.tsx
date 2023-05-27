import { AddCircle } from "@mui/icons-material";
import { Button, ClickAwayListener } from "@mui/material";
import { motion } from "framer-motion";
import { ActionButtonItems } from "./ActionButtonItems";


type ActionButtonProps = {
  actionBtn: boolean;
  setActionBtn: Function;
}

export const ActionButton = (props:ActionButtonProps) => {
  const handleClick = () => {
    props.setActionBtn(!props.actionBtn);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => props.setActionBtn(false)}>
        <Button centerRipple>
          <motion.div
            animate={{
              rotate: props.actionBtn ? 45 : 0,
            }}
          >
            <AddCircle
              className={`text-5xl m-auto ${
                props.actionBtn ? "rotate-45 text-gray-400" : "text-white"
              }`}
              onClick={handleClick}
            />
          </motion.div>
          {props.actionBtn ? <ActionButtonItems /> : null}
        </Button>
      </ClickAwayListener>
    </>
  );
};

export default ActionButton;
