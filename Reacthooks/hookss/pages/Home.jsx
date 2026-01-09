// components
import HookUseState from "../src/components/HookuseState";
import HookUseReducer from "../src/components/HookUseReducer";
import HookUseEffect from "../src/components/HookUseEffect";
import HookUseRef from "../src/components/HookUseRef";
import HookUseCallback from "../src/components/HookUseCallback";
// context
import { useContext } from "react";
import { SomeContext } from "../src/components/HookUseContext";
import HookUseMemo from "../src/components/HookUseMemo";
import HookUseLayoutEffect from "../src/components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../src/components/HookUseImperativeHandle";
import HookCustom from "../src/components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />

      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;
