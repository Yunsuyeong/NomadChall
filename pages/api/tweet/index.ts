import client from "../../../lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/withSession";
import withHandler, { IResponse } from "../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    if (req.method === "GET") {
        const tweets = await client.tweet.findMany({
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
        res.json({
            ok: true,
            tweets,
        });
    }
    if (req.method === "POST") {
        const {
            body: { message },
            session: { user },
        } = req;
        const tweet = await client.tweet.create({
            data: {
                message,
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
            },
        });
        res.json({
            ok: true,
            tweet,
        });
    }
}

export default withApiSession(
    withHandler({ methods: ["GET", "POST"], handler, isPrivate: true })
);
