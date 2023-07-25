import { useRecoilState } from "recoil";
import { createTaskState, importTask } from "../globalState";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect } from "react";
export const useCreate = () => {
  const [isCreate, setIsCreate] = useRecoilState(createTaskState);
  const isCreateActive = () => {
    setIsCreate(true);
  };
  const isCreateNegative = () => {
    setIsCreate(false);
  };
  return { isCreate, isCreateActive, isCreateNegative };
};

export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { date, year, month, day };
};

export const GetTask = () => {
  const [list, setList] = useRecoilState(importTask);
  useEffect(() => {
    const q = query(collection(db, "task"), orderBy("created", "asc"));
    const data = onSnapshot(q, (snapShot) => {
      setList(snapShot.docs.map((doc) => doc.data()));
    });
  }, []);
  return { list: list || [] };
};

export const Update = () => {
  const updateStatus = (path: string) => {
    console.log("hello");
    updateDoc(doc(db, "task", path), {
      status: true,
    });
  };
  const deleteTask = async (path: string) => {
    await deleteDoc(doc(db, "task", path));
  };
  return { updateStatus, deleteTask };
};
