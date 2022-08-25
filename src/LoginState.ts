import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface IUserState {
  [Key: string]: string;
}

export const LoginState = atom<boolean>({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom<IUserState>({
  key: "userState",
  default: {
    nickname: "",
    id: "",
    password: "",
  },
  effects_UNSTABLE: [persistAtom],
});
