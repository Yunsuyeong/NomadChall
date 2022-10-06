import { Tweet } from "@prisma/client";
import { NextPage } from "next";
import React, { useEffect } from "react";
import useUser from "./../lib/useUser";
import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";

interface TweetsResponse {
    ok: Boolean;
    tweets: Tweet[];
}

interface TweetForm {
    message: string;
}

interface ITweet {
    id: number;
    message: string;
    createdAt: any;
}

const Home: NextPage = () => {
    const router = useRouter();
    const { data: tweetData } = useSWR<TweetsResponse>("/api/tweet");
    const { user, isLoading } = useUser();
    const id = user?.email.split("@")[0];
    const { register, handleSubmit } = useForm<TweetForm>();
    const [uploadTweet, { data, loading }] =
        useMutation<TweetsResponse>("/api/tweet");
    const onValid = (form: TweetForm) => {
        if (loading) return;
        uploadTweet(form);
    };
    useEffect(() => {
        if (data && data?.ok) {
            alert("Tweet created successfully!");
        }
    }, [data, router]);
    return (
        <>
            <div className="flex justify-center pt-8">
                <div className="flex items-center space-x-4">
                    <div className=" w-16 h-16 bg-white rounded-full" />
                    <div className="flex flex-col">
                        <span className="text-sm block font-semibold text-gray-100">
                            {isLoading ? "Loading..." : user?.name}
                        </span>
                        <span className="text-sm block font-medium text-gray-100">
                            @{id}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <form
                    onSubmit={handleSubmit(onValid)}
                    className="flex flex-col mt-8 space-y-4"
                >
                    <div className="rounded-md relative flex flex-col items-end shadow-sm">
                        <textarea
                            typeof="text"
                            {...register("message", {
                                required: "tweet is required.",
                            })}
                            placeholder="How are you today?"
                            className="appearance-none px-4 py-2 text-xs text-black border border-black rounded-md shadow-sm
                             placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                        <button
                            className="w-1/4 py-1 mt-2 bg-blue-500 hover:bg-blue-600 text-white border border-transparent rounded-xl shadow-sm
                             text-xs font-medium
                        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
                        >
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col items-center pt-8 space-y-4">
                {tweetData?.tweets?.map((tweet: ITweet) => (
                    <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
                        <a className="flex pl-4 pr-20 py-4 bg-blue-400 rounded-lg cursor-pointer justify-between">
                            <div className="flex justify-start space-x-2">
                                <div className="w-12 h-12 bg-white rounded-full" />
                                <div className="flex flex-col">
                                    <h3 className="text-md font-bold text-white">
                                        {tweet.message}
                                    </h3>
                                    <span className="pt-2 selection:font-medium text-[6px] text-white">
                                        {tweet.createdAt
                                            .split("T")[0]
                                            .slice(-5)}{" "}
                                        {tweet.createdAt
                                            .split("T")[1]
                                            .slice(0, 5)}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Home;
