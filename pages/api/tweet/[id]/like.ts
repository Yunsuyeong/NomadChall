import client from "../../../../lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../../lib/withSession";
import withHandler, { IResponse } from "../../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const {
        query: { id },
        session: { user },
    } = req;
    const alreadyExists = await client.like.findFirst({
        where: {
            tweetId: +id!.toString(),
            userId: user?.id,
        },
        select: {
            id: true,
        },
    });
    if (alreadyExists) {
        await client.like.delete({
            where: {
                id: alreadyExists.id,
            },
        });
    } else {
        await client.like.create({
            data: {
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
                tweet: {
                    connect: {
                        id: +id!.toString(),
                    },
                },
            },
        });
    }
    res.json({
        ok: true,
    });
}

export default withApiSession(
    withHandler({ methods: ["POST"], handler, isPrivate: true })
);
