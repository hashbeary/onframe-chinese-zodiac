import { CHINESE_ZODIAC } from "@/app/config";
import {
	FrameRequest,
	getFrameHtmlResponse,
	getFrameMessage,
} from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
	const body: FrameRequest = await req.json();

	const { message } = await getFrameMessage(body, {
		neynarApiKey: "NEYNAR_ONCHAIN_KIT",
	});

	const year = +message!.input;
	const user_zodiac = CHINESE_ZODIAC[year % 12];

	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: `you are ${user_zodiac.animal === "ox" ? "an" : "a"} ${
						user_zodiac.animal
					}!`,
				},
			],
			image: {
				src: user_zodiac.img_src,
				aspectRatio: "1:1",
			},
		})
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = "force-dynamic";
