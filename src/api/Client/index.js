import { HttpService } from "../Core";
import { AccountHttpService } from "./Account";

export function httpClient(options) {
  const httpService = HttpService(options);

  return {
    account: AccountHttpService({ httpService })
  }
}