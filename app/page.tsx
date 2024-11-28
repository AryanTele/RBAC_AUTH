import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black">
      <div className="space-y-6">
        <h1 className="text-5xl font-semibold text-white drop-shadow-md">
          AUTH 🔒
        </h1>
        <p className="space-y-6 text-center text-white">
          A simple authentication service
        </p>
        <div className="flex justify-center">
          <LoginButton>
            <Button variant="outline" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
