import { getIP } from "@/app/utils/getIP";

export const IP = () => {
  const ip = getIP();

  return (
    <div>
      <p>IP: {ip}</p>
    </div>
  );
};
