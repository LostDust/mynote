# useMemo 实现组件缓存

```tsx
import * as React from "react";
import { storeContext } from "./src/store";
import Child from "./src/components/Child";

function Parent(): JSX.Element {
  const { msg, dispatch } = React.useContext(storeContext);
  const renderChild = React.useMemo(() => <Child msg={msg} />, [msg]);

  return {
    <section>
      <h1>Hello</h1>
      {renderChild}
    </section>
  }
}
```
