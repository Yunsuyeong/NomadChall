import { Tweet, User } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import useMutation from "../../lib/useMutation";
import useUser from "../../lib/useUser";
import { cls } from "../../lib/utils";

interface TweetWithUser extends Tweet {
    user: User;
    createdAt: any;
}

interface TweetResponse {
    ok: boolean;
    tweet: TweetWithUser;
    isLiked: boolean;
}

const TweetDetail: NextPage = () => {
    const router = useRouter();
    const { user } = useUser();
    const { mutate: likeMutate } = useSWRConfig();
    const { data, mutate } = useSWR<TweetResponse>(
        router.query.id ? `/api/tweet/${router.query.id}` : null
    );
    const [toggleLike] = useMutation(`/api/tweet/${router.query.id}/like`);
    const onLikeClick = () => {
        if (!data) return;
        mutate((prev) => prev && { ...prev, isLiked: !data.isLiked }, false);
        likeMutate("/api/tweet", (prev: any) => ({ isLiked: !prev.isLiked }));
        toggleLike({});
    };
    const id = user?.email.split("@")[0];
    return (
        <div className="flex justify-center relative top-[10vw]">
            <div className="flex flex-col w-1/3 h-72 bg-blue-300 rounded-lg cursor-pointer">
                <div className="flex flex-col py-4 space-y-2">
                    <div className="flex gap-2 pl-2 pb-4 border-b-2">
                        <div className="w-16 h-16 bg-white rounded-full" />
                        <div className="flex flex-col">
                            <span className="pt-2 text-xl block font-semibold text-gray-100">
                                {data?.tweet?.user?.name}
                            </span>
                            <span className="text-sm block font-medium text-gray-100">
                                @{id}
                            </span>
                        </div>
                    </div>
                    <span className="text-3xl mt-3 text-gray-900"></span>
                    <span className="text-base my-6 text-gray-900"></span>
                    <div className="flex flex-col gap-12 pl-6">
                        <div className="flex gap-6">
                            <h3 className="text-lg font-bold text-white">
                                {data?.tweet?.message}
                            </h3>
                            <span className="pt-2 text-[8px] font-semibold text-white">
                                {data?.tweet?.createdAt
                                    .split("T")[0]
                                    .slice(-10)}{" "}
                                {data?.tweet?.createdAt
                                    .split("T")[1]
                                    .slice(0, 5)}
                            </span>
                        </div>
                        <button
                            onClick={onLikeClick}
                            className={cls(
                                "flex items-center rounded-md font-bold",
                                data?.isLiked
                                    ? "text-red-500"
                                    : "text-gray-400 hover:text-gray-500"
                            )}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetDetail;
