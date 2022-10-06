import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { IResponse } from "../../../lib/withHandler";
import client from "../../../lib/client";
import withHandler from "../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    const { email } = req.body;
    if (!email) return res.status(400).json({ ok: false });
    /* const account = await client.user.create({
        data: {
            email: {
                connectOrCreate: {
                    where: {
                        ...email,
                    },
                    create: {
                        name: "Anonymous",
                        ...email,
                    },
                },
            },
        },
    }); */
    const account = await client.user.upsert({
        where: {
            email,
        },
        create: {
            name: "Annonymous",
            email,
        },
        update: {},
    });
    return res.json({
        ok: true,
    });
}

export default withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
});
