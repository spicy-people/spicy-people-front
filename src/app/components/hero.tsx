import Link from "next/link";
import mainImage from "../../../public/images/main_img.jpeg";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={"text-center text-red-800"}>
      <Image
        className={"rounded-full mx-auto"}
        src={mainImage}
        alt="메인 이미지"
        width={250}
        height={250}
        priority
      />
      <h2 className={"text-3xl font-bold mt-2 "}>{"Hi, I'm Basil"}</h2>
      <h2 className={"text-xl font-semibold"}>
        basil, is a culinary herb of the family mints.
      </h2>
      <p>basil is one of the most popular culinary herbs.</p>
      <Link href={"/contact"}>
        <button
          className={
            "bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2 text-black"
          }
        >
          Contact Me
        </button>
      </Link>
    </section>
  );
}
