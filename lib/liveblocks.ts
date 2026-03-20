import { Liveblocks } from "@liveblocks/node";

let liveblocksInstance: Liveblocks | null = null;

export function getLiveblocks() {
  const secret = process.env.LIVEBLOCKS_SECRET_KEY;

  if (!secret) {
    throw new Error(
      "Missing LIVEBLOCKS_SECRET_KEY. Set it in your environment variables."
    );
  }

  if (!liveblocksInstance) {
    liveblocksInstance = new Liveblocks({
      secret,
    });
  }
  return liveblocksInstance;
}
