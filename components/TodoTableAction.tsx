"use client";



import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./Spinner";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import { ITodos } from "@/interface";

const TodoTableAction = ({todo}: {todo:ITodos}) => {
    const [loding,setLoading]=useState(false);
  return (
    <>
        <EditTodoForm todo={todo}/>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id:todo?.id as string });
          setLoading(false);
        }}
      >
        {loding ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableAction;
