import { AccountBalanceWallet, Book, QrCodeScanner } from "@mui/icons-material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const ActionButtonItems = (props: any) => {
  return (
    <>
      <motion.div
        ref={props.ref}
        className="flex flex-col absolute bottom-16"
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, x: -100 },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Button href="/campus" centerRipple className="w-8 m-auto">
          <QrCodeScanner
            fontSize="large"
            className="text-white m-auto p-1 bg-red-500 rounded-full shadow-lg my-2"
          />
        </Button>
        <Button centerRipple className="w-8 m-auto">
          <Book
            fontSize="large"
            className="m-auto p-1 text-white bg-red-500 rounded-full shadow-lg my-2"
          />
        </Button>
        <Button className="w-8 auto" centerRipple>
          <AccountBalanceWallet
            fontSize="large"
            className="ml-0 p-1 bg-red-500 text-white rounded-full shadow-lg my-2"
          />
        </Button>
      </motion.div>
    </>
  );
};
