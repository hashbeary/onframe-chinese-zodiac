import { NEXT_PUBLIC_URL } from "@/app/config";
import { getFrameHtmlResponse } from "@coinbase/onchainkit";
import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: "send",
				},
			],
			image: {
				src: `${NEXT_PUBLIC_URL}/init.jpeg`,
				aspectRatio: "1:1",
			},
			input: {
				text: "your birth year...",
			},
			post_url: `${NEXT_PUBLIC_URL}/api/zodiac`,
		})
	);
}

export const dynamic = "force-dynamic";
