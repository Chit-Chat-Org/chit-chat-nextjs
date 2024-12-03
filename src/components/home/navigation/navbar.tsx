import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <img src="/icons/icon.png" className="w-10 h-10" alt="Logo" />
              <span className="text-lg font-medium">Chit Chat</span>
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link
                href="/"
                className="hover:text-foreground/80 text-sm"
              >
                Pricing
              </Link>
              <Link href="https://github.com/apurvjha123" className="hover:text-foreground/80 text-sm">
                About
              </Link>
              <Link href="/docs" className="hover:text-foreground/80 text-sm">
                Docs
              </Link>
              <Link href="https://github.com/Chit-Chat-Org/Chit-Chat-Nextjs" className="hover:text-foreground/80 text-sm">
                Github
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {user ? (
              <UserButton />
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden md:flex",
                  })}
                >
                  Start free trial
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
