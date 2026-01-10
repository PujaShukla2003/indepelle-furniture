import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function HomeOfficePage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/home-office"
  );

  const images = fs.existsSync(dirPath)
    ? fs
        .readdirSync(dirPath)
        .filter((img) =>
          /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
        )
    : [];

  const coverImage = images[0]; // first image as cover

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">
        Home Office
      </h1>

      <Link
        href="/home-office/all"
        className="block rounded-2xl overflow-hidden border hover:shadow-xl transition"
      >
        {coverImage && (
          <Image
            src={`/images/home-office/${coverImage}`}
            alt="Home Office"
            width={1200}
            height={600}
            className="w-full h-80 object-cover"
          />
        )}

        <div className="p-6 text-xl font-medium text-center">
          View All
        </div>
      </Link>
    </section>
  );
}
