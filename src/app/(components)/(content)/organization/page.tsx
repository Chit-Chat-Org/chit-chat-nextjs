"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ChevronRight, Loader, Plus } from "lucide-react";
import CardHoverEffectDemo from "./Card";
import { Input } from "@/components/ui/inputs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { cn } from "@/lib/utils";
import { addOrganization, organization } from "@/app/api/apiCall";

const Page = () => {
  const router = useRouter();
  const toast = useToast();
  const { isSignedIn, user, isLoaded } = useUser();

  // Declare hooks before any early return to avoid violating rules of hooks
  const [formData, setFormData] = useState<organization>({
    userId: user?.id,
    OrganizationName: "",
    OrganizationWebsite: "",
    organizationEmail: "",
    OrganizationPhone: "",
    isActive: true,
  });
  const [tableKey, setTableKey] = useState(0); 
  const [loading, setLoading] = useState(false);

  // Early return after hooks are initialized
  if (!isSignedIn) {
    router.push("/sign-in");
    return <div>Redirecting...</div>; // Prevent further rendering while redirecting
  }

  if (!isLoaded) {
    return <div>Loading.....</div>;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await addOrganization(formData);

      if (res?.data?.status == "Success") {
        toast.toast({
          title: "Organization Created",
          description: "The organization was successfully created.",
        });
        setTableKey(prev => prev + 1);
      } else {
        throw new Error("Failed to create organization.");
      }
    } catch (error) {
      toast.toast({
        title: "Error",
        description: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-between px-5 py-2 pt-4">
        <div className="text-lg font-medium">Organisation</div>
        <Modal>
          <ModalTrigger>
            <button
              className="relative grid items-center overflow-hidden rounded-full px-3 py-1.5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-transform duration-200"
              style={{ width: "fit-content", height: "fit-content" }}
            >
              <span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40 blur-md"></span>
              <span className="z-10 flex items-center justify-center gap-1.5 px-2 text-sm text-neutral-100">
                <Plus className="w-4 h-4" />
                Create Org.
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-background">
                <h2 className="font-bold text-xl text-neutral-200">
                  Welcome to Chit Chat
                </h2>
                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                  Fill in your Organization information for creating the Org
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname">Organization Name</Label>
                      <Input
                        id="firstname"
                        placeholder="John Doe"
                        type="text"
                        name="OrganizationName"
                        onChange={handleChange}
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname">Organization Phone</Label>
                      <Input
                        id="lastname"
                        placeholder="(+1) 1234567893"
                        type="number"
                        name="OrganizationPhone"
                        onChange={handleChange}
                      />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Organization Email</Label>
                    <Input
                      id="email"
                      placeholder="apurvjha123@gmail.com"
                      type="email"
                      name="organizationEmail"
                      onChange={handleChange}
                    />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Organization Website</Label>
                    <Input
                      id="url"
                      placeholder="https://apurvjha.vercel.app"
                      type="url"
                      name="OrganizationWebsite"
                      onChange={handleChange}
                    />
                  </LabelInputContainer>

                  <ModalFooter className="gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-background text-gray-100 text-sm px-2 py-2 rounded-md border border-border w-28 flex items-center justify-center"
                    >
                      {loading ? (
                        <Loader className="animate-spin w-4 h-4" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </ModalFooter>
                </form>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
      <CardHoverEffectDemo UserId={user?.id} key={tableKey} />
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page;
