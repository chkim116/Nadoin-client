import Head from "next/head";

export default function Title({ title, desc }) {
  return (
    <Head>
      <title>
        {title} | {desc}
      </title>
    </Head>
  );
}
