import { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "../../../lib/withHandler";
import client from "../../../lib/client";
import { withApiSession } from "../../../lib/withSession";
import withHandler from "../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const { email } = req.body;
    const foundEmail = await client.user.findUnique({
        where: {
            email,
        },
    });
    if (!foundEmail) return res.status(404).end();
    req.session.user = {
        id: foundEmail?.id,
    };
    await req.session.save();
    res.json({
        ok: true,
    });
}

export default withApiSession(
    withHandler({ methods: ["POST"], handler, isPrivate: false })
);
