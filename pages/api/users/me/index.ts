import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { IResponse } from "../../../../lib/withHandler";
import client from "../../../../lib/client";
import { withApiSession } from "../../../../lib/withSession";
import withHandler from "../../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const profile = await client.user.findUnique({
        where: {
            id: req.session.user?.id,
        },
    });
    res.json({
        ok: true,
        profile,
    });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
