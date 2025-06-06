"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Loading</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <p className="mt-2">You are already signed in.</p>
      <Button
        variant="default"
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("sign-in");
              },
            },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

export default HomeView;
