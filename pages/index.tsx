import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function Home() {
  return (
    <UserProvider>
      <div>
        Home page
        <button>Login</button>
      </div>
    </UserProvider>
  );
}
