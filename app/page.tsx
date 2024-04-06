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
		src: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/20100720_Fukuoka_Kushida_3614_M.jpg/640px-20100720_Fukuoka_Kushida_3614_M.jpg`,
		aspectRatio: "1:1",
	},
	input: {
		text: "your birth year...",
	},
	post_url: `${NEXT_PUBLIC_URL}/api`,
});

export const metadata: Metadata = {
	title: "Chinese Zodiac on the best Web3 Social Network",
	description: "Chinese Zodiac on the best Web3 Social Network",
	openGraph: {
		title: "Chinese Zodiac on the best Web3 Social Network",
		description: "Chinese Zodiac on the best Web3 Social Network",
		images: [
			`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/20100720_Fukuoka_Kushida_3614_M.jpg/640px-20100720_Fukuoka_Kushida_3614_M.jpg`,
		],
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
