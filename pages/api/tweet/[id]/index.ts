import client from "../../../../lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../../lib/withSession";
import withHandler, { IResponse } from "../../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const {
        query: { id },
        session: { user },
    } = req;
    const tweet = await client.tweet.findUnique({
        where: {
            id: +id.toString(),
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                },
            },
        },
    });
    const isLiked = Boolean(
        await client.like.findFirst({
            where: {
                tweetId: tweet?.id,
                userId: user?.id,
            },
            select: {
                id: true,
            },
        })
    );
    res.json({
        ok: true,
        tweet,
        isLiked,
    });
}

export default withApiSession(
    withHandler({ methods: ["GET"], handler, isPrivate: true })
);
