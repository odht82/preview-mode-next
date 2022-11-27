import Link from "next/link";

export default function HeroPost({
  id,
  title,
  body,
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/post/${id}`} className="hover:underline">{id}.{" "}{title}</Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{body}</p>
        </div>
      </div>
    </section>
  );
}
