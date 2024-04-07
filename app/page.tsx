import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "./config";

const frameMetadata = getFrameMetadata({
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
});

export const metadata: Metadata = {
	title: "Chinese Zodiac on the best Web3 Social Network",
	description: "Chinese Zodiac on the best Web3 Social Network",
	openGraph: {
		title: "Chinese Zodiac on the best Web3 Social Network",
		description: "Chinese Zodiac on the best Web3 Social Network",
		images: [`${NEXT_PUBLIC_URL}/init.jpeg`],
	},
	other: {
		...frameMetadata,
	},
};

export default function Page() {
	return (
		<>
			<h1>Chinese Zodiac on the best Web3 Social Network</h1>
		</>
	);
}
