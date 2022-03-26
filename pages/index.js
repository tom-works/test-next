import Head from "next/head";
import Styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./components/Header";
import Content from "./components/Content";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  let title = "ABC";

  return (
    <>
      <Content>
        <Header title={title} />
        <Heading as="h1" size="4xl" isTruncated>
          (4xl) In love with React & Next
        </Heading>

        <h2>GitHubも練習</h2>
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
