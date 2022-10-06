import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "./../lib/useMutation";
import { MutationResult } from "./create-account";
import { useEffect } from "react";

interface LoginForm {
    email?: string;
}

const logIn: NextPage = () => {
    const router = useRouter();
    const [confirmEmail, { data, loading }] =
        useMutation<MutationResult>("/api/users/confirm");
    const { register, handleSubmit } = useForm<LoginForm>();
    const onValid = (form: LoginForm) => {
        if (loading) return;
        confirmEmail(form);
    };
    useEffect(() => {
        if (data?.ok) {
            router.push("/");
        }
    }, [data, router]);
    return (
        <div className="mt-12 px-8">
            <h3 className="text-3xl font-bold text-center">Sign In</h3>
            <div className="mt-8">
                <form
                    onSubmit={handleSubmit(onValid)}
                    className="flex flex-col mt-8 space-y-4"
                >
                    <div className="space-y-2">
                        <div className="rounded-md relative flex  items-center shadow-sm">
                            <input
                                placeholder="Email"
                                className="appearance-none pl-4 w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                type="text"
                                {...register("email", {
                                    required: "Email is required.",
                                })}
                            />
                        </div>
                        <button
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default logIn;
