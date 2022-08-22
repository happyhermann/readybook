import { atom } from "recoil";

export const searchedAtom = atom({
  key: "searched",
  default: [],
});

export const inputAtom = atom({
  key: "input",
  default: [],
});

export const checkAtom = atom({
  key: "check",
  default: false,
});

export const pageAtom = atom({
  key: "page",
  default: 10,
});

export const checkId = atom({
  key: "id",
  default: "",
});
