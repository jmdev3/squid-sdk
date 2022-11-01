import { Squid } from "@0xsquid/sdk";

import * as dotenv from "dotenv";

dotenv.config();

const getSDK = async (): Promise<Squid> => {
  const squid = new Squid({
    baseUrl: "http://localhost:3000"
  });

  await squid.init();
  return squid;
};

(async () => {
  const squid = await getSDK();

  console.log("> squid: ", squid);
})();
