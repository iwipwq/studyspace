import {
  useRecoilState,
  atom,
  selector,
  useRecoilValue,
  RecoilRoot
} from "recoil";

const fontSizeState = atom({
  key: "fontSizeState",
  default: 14
});

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button
        onClick={() => {
          setFontSize((size) => size + 1);
        }}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    </>
  );
}

function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{ fontSize }}>This text will increase in size too.</p>;
}

const fontSizeLabelState = selector({
  key: "fontSizelabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  }
});

export default function FontSizeRenderer() {
  return (
    <div>
      <Text />
      <FontButton />
    </div>
  );
}
