import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useComponentLog } from "./useComponentLog";

export const Nav = () => {
  const router = useRouter();
  useComponentLog("Nav");

  return (
    <ul>
      {["/routes/foo", "/routes/bar", "/dynamic-routes/foo", "/dynamic-routes/bar"].map((path) => {
        return (
          <li key={path}>
            <ul>
              {path}
              <li>
                <a href={path}>anchor element</a>
              </li>
              <li>
                <Link href={path}>
                  <a>Link</a>
                </Link>
              </li>
              <li>
                <Link href={path} shallow={true}>
                  <a>Link shallow</a>
                </Link>
              </li>
              <li>
                <a onClick={() => router.push(path)}>router.push</a>
              </li>
              <li>
                <a onClick={() => router.push(path, undefined, { shallow: true })}>router.push shallow</a>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
