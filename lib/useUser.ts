import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface ProfileResponse {
    ok: boolean;
    profile: User;
}

export default function useUser(pathname?: string) {
    const router = useRouter();
    const url = "/api/users/me";
    const { data, error } = useSWR(pathname === "/create-account" ? null : url);
    useEffect(() => {
        if (data && !data.ok) {
            router.replace("/create-account");
        }
    }, [data, error]);
    return { user: data?.profile, isLoading: !data && !error };
}
