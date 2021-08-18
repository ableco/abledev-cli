// @ts-nocheck
import { RequestContext } from "@ableco/abledev-dev-environment";
import { HostContextType } from "../HostContext";

async function __queryName__(
  _input: {},
  { db: _db }: RequestContext & HostContextType,
) {
  return { data: "some-data" };
}

export default __queryName__;
