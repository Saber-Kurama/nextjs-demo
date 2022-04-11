/*
 * @Author: saber
 * @Date: 2022-04-11 15:27:41
 * @LastEditTime: 2022-04-11 15:43:39
 * @LastEditors: saber
 * @Description:
 */
import Head from "next/head";
import Link from "next/link";
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
