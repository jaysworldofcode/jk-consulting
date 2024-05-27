import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
import { new_inquiries } from '@/repository/InquiriesRepository'

const postHandler = async (
  req: NextApiRequest, res: NextApiResponse
) => {
    const data = await req.json()

    const result = new_inquiries(
        data.fullname,
        data.email,
        data.phone,
        data.message
    )

    return NextResponse.json({
        message: 'Message sent',
        data: result
    }) 
};

export { postHandler as POST };