import { Trans } from "react-i18next";
import { CustomTrans } from "./components/custom-trans";

function App() {
  return (
    <div>
      <Trans className="anyclass" parent="p" i18nKey="about.text" />
      {/* Custom Trans will change class font family on language change using tailwind*/}
      <CustomTrans
        className="anyclass new-font-family"
        parent="p"
        i18nKey="about.text"
      />
    </div>
  );
}

export default App;
