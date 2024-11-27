"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>En cours de développement...</div>;
  }

  if (!session) {
    return <div>You must be logged in to access this page.</div>;
  }

  return (
    <div>
      <h1>Welcome {session.user?.email || "User"}!</h1>
    </div>
  );
}
