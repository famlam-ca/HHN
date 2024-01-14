"use client";

import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useRef, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { updateUser } from "@/server/user";
import { CustomUser } from "@/types/types";

import { EditImage } from "./edit-image";

interface ProfileProps {
  user: CustomUser;
}

export const EditProfile = ({ user }: ProfileProps) => {
  const pathname = usePathname();
  const closeRef = useRef<ElementRef<"button">>(null);

  const [username, setUsername] = useState<string>(user.username);
  const [bio, setBio] = useState(user.bio || "");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateUser({
        id: user.id,
        username: username,
        bio: bio,
      })
        .then(() => {
          toast({ title: "Profile updated" });
          closeRef?.current?.click?.();
        })
        .catch(() =>
          toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          }),
        );
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          {pathname !== `/admin/${username}/edit` ? (
            <span>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </span>
          ) : (
            <span>Make changes to {username}&apos;s profile here.</span>
          )}
        </CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <Label>Username</Label>
            {/* TODO: Add redirect on change */}
            <Input
              disabled
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              defaultValue={user.username}
            />
          </div>

          <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea
              disabled={isPending}
              placeholder="User bio"
              onChange={(e) => setBio(e.target.value)}
              defaultValue={user.bio}
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label>Edit your profile image</Label>
            <EditImage userId={user.id} initialImage={user.image} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-end">
          <Button disabled={isPending} type="submit" variant="outline">
            {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Save"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};