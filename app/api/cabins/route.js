import { getCabins } from "@/app/_lib/data-service";

export async function GET() {
  try {
    const [cabins] = await Promise.all([getCabins()]);
    return Response.json({ cabins });
  } catch {
    return Response.json({ message: "Cabins could not be founded" });
  }
}
