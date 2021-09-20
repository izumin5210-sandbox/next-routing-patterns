import { ReactElement } from "react";
import { Nav } from "./Nav";

export function Layout(props: { children: ReactElement }) {
  return (
    <div>
      <Nav />
      <main>{props.children}</main>
    </div>
  );
}
