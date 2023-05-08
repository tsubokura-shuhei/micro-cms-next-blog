import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "../../libs/client";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((blog: any) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </div>
  );
}
