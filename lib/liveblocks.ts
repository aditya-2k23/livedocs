import { Liveblocks } from "@liveblocks/node";

let liveblocksInstance: Liveblocks | null = null;

export function getLiveblocks() {
  if (!liveblocksInstance) {
    liveblocksInstance = new Liveblocks({
      secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
    });
  }
  return liveblocksInstance;
}
