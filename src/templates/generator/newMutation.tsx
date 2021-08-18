// @ts-nocheck
import { RequestContext } from "@ableco/abledev-dev-environment";
import { HostContextType } from "../HostContext";

async function __mutationName__(
  _input: {},
  { db: _db }: RequestContext & HostContextType,
) {
  return { ok: true };
}

export default __mutationName__;
