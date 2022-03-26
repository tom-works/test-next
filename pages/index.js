import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./components/Header";
import Content from "./components/Content";
import useSWR from "swr";

export default function Home() {
  let title = "ABC";
  const { data, error } = useSWR("/api/message");
  if (error) return <div>fail to load</div>;
  if (!data) return <div>loading....</div>;

  return (
    <>
      <Content>
        <Head></Head>
        <Header title={title} />
        <p>{data.message}</p>
        <h2>ともすた</h2>
        <p>Nextの練習</p>
        <div>
          <Link href="/about">
            <button>About</button>
          </Link>
        </div>
      </Content>
    </>
  );
}
