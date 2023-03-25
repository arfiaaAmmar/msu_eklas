import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { FileDownload } from "@mui/icons-material";

const AccountDepartment = () => {
  return (
    <>
      <p className="font-semibold text-lg">Fee Statements & Payments</p>
      <div className="bg-neutral-800 p-4 rounded-md mt-2 w-full">
        <div className="flex gap-2">
          <ReceiptLongIcon className="text-white" />
          <p className="text-white flex-grow">Fee Statement</p>
        </div>

        <div className="flex justify-between bg-neutral-300 px-2 rounded-md my-2">
          <p>This semester :</p>
          <p className="font-bold">RM1241</p>
        </div>
        <div className="flex justify-between bg-neutral-300 px-2 rounded-md my-2">
          <p>Amount Paid :</p>
          <p className="font-bold">RM1241</p>
        </div>
        <div className="flex justify-between bg-neutral-300 px-2 rounded-md my-2">
          <p>Balance :</p>
          <p className="font-bold">RM1241</p>
        </div>
        <button className="block ml-auto mr-0 bg-red-600 rounded-md px-2 my-2 text-white">
          Full Statement
        </button>
        <p className="text-white ">View Receipt</p>
        <div className="flex justify-between">
          <select
            title="selectReceipt"
            name="selectReceipt"
            id="selectReceipt"
            className="w-40 rounded bg-neutral-300"
          >
            <option value="Sept 2021">Sept 2021</option>
            <option value="Sept 2021">Sept 2021</option>
            <option value="Sept 2021">Sept 2021</option>
            <option value="Sept 2021">Sept 2021</option>
          </select>
          <div>
            <button title="viewReceipt" className="mx-2">
              <OpenInFullIcon className=" bg-red-600 rounded-md px-1 text-white" />
            </button>
            <button title="downloadReceipt">
              <FileDownload className="bg-red-600 rounded-md px-1 text-white" />
            </button>
          </div>
        </div>
        <Divider className="my-4" color="grey" />
        <div className="flex gap-2">
          <ReceiptLongIcon className="text-white" />
          <p className="text-white flex-grow">Pay Now</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between bg-neutral-300 px-2 rounded-md">
            <p>Method :</p>
            <select name="PaymentMethod" id="PaymentMethod" title="PaymentMethod" className="bg-neutral-300 text-right text-sm">
              <option value="Credit/Debit">Credit/Debit</option>
              <option value="Online Banking">Online Banking</option>
            </select>
          </div>
          <input type="text" placeholder="Full Name" className="bg-neutral-300 px-2 rounded-md my-2 w-full"/>
          <input type="number" name="CardNumber" id="CardNumber" placeholder="Card Number" className="bg-neutral-300 px-2 rounded-md w-full" />
          <div className="flex gap-4 mt-2">
            <input
              placeholder="CVV"
              className="bg-neutral-300 rounded-md px-2 w-16"
            />
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              className="px-1 w-32 rounded-md bg-neutral-300 placeholder-n"
              placeholder="dd/mm/yyyy"
            />
            <button className="bg-red-600 rounded-md px-1 text-white">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDepartment;
