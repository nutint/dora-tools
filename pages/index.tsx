import { UserProvider } from "@auth0/nextjs-auth0/client";
import { averageLeadTime } from "@nutint/dora";
import dayjs from "dayjs";

export default function Home() {
  const result = averageLeadTime(dayjs(), [dayjs().add(-1, "day")]);
  console.log({ result });
  return (
    <UserProvider>
      <div>
        Home page
        <a href="/api/v1/auth/login">Login</a>
      </div>
    </UserProvider>
  );
}
