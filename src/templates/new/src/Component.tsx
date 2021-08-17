// @ts-nocheck
import { useQuery, wrapRootComponent } from "@ableco/abledev-react";
import * as React from "react";
import getData from "./queries/getData";

function __componentName__() {
  const { data } = useQuery(getData);

  if (data) {
    return (
      <div>
        __componentName__ says:{" "}
        <pre>
          <code>Hello {data.hello}</code>
        </pre>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default wrapRootComponent(__componentName__);
