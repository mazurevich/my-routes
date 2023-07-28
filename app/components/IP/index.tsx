import { headers } from "next/headers";

export const IP = () => {
  const ip = headers().get("x-forwarded-for");

  return (
    <div>
      <p>IP: {ip}</p>
    </div>
  );
};
