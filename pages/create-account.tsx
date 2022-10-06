import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import useMutation from "./../lib/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface CreateForm {
    email?: string;
}

export interface MutationResult {
    ok: boolean;
}

const createAccount: NextPage = () => {
    const router = useRouter();
    const [create, { loading, data }] =
        useMutation<MutationResult>("/api/users/create");
    const { register, handleSubmit } = useForm<CreateForm>();
    const onValid = (form: CreateForm) => {
        if (loading) return;
        create(form);
    };
    useEffect(() => {
        if (data?.ok) {
            alert("Account created successfully. Please log in!");
            router.push("/log-in");
        }
    }, [data, router]);
    return (
        <div className="mt-12 px-8">
            <h3 className="text-3xl font-bold text-center">Create Account</h3>
            <div className="mt-8">
                <form
                    onSubmit={handleSubmit(onValid)}
                    className="flex flex-col mt-8 space-y-4"
                >
                    <div className="space-y-2">
                        <div className="rounded-md relative flex  items-center shadow-sm">
                            <input
                                placeholder="Email"
                                className="appearance-none pl-4 w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                type="text"
                                {...register("email", {
                                    required: "Email is required.",
                                })}
                            />
                        </div>
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default createAccount;
