import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { CurriculumStatements } from '../../../routes/curriculumStatementsRoute';



type StatementTabContentProps = {
  statement: string
  statements: CurriculumStatements[]
  setStatement: React.Dispatch<React.SetStateAction<string>>
};

const StatementTabContent = (props: StatementTabContentProps) => {

  return (
    <div className='p-2'>
      <p className="text-neutral-50 font-semibold my-2">Select a statement</p>
      {props.statements?.map((statement) => (
        <Button
          key={statement.id}
          onClick={() => props.setStatement(statement.id)}
          className={`${props.statement == statement.id ? 'bg-red-500' : 'bg-neutral-200'} rounded-md m-1 leading-4 text-[0.8rem] mx-1 text-neutral-800`}
        >
          {statement.id}
        </Button>
      ))}
     
    </div>
  );
};

export default StatementTabContent;
