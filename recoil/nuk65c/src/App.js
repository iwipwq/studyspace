import { useState } from "react";
import "./styles.css";
import CharacterCounter from "./components/CharacterCounter";
import FontSizeRenderer from "./components/FontSizeRenderer";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <FontSizeRenderer />
    </RecoilRoot>
  );
}
