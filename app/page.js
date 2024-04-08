import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 text-lg">
      <p>Jeremy Munroe</p>
      <p>UI/UX Developer</p>
      <Button color="primary" variant="ghost" as={Link} href="/home">
        Explore
      </Button>
    </div>
  );
}
