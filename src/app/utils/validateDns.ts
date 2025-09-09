import { promises as dns } from "dns";

export async function isValidEmailDNS(email: string) {
  const domain = email.split("@")[1];

  try {
    const mxRecords = await dns.resolveMx(domain);
    return mxRecords && mxRecords.length > 0;
  } catch {
    return false;
  }
}
