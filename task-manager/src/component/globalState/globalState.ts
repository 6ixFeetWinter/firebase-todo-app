import { atom } from "recoil";

export const createTaskState = atom<boolean>({
  key: "createTaskState",
  default: false,
});

export const importTask = atom<any>({
  key: "importTask",
  default: null,
});
