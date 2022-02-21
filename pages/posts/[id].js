import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    // 100件を超えるデータを取得する際に100以降のデータを404で返す処理
    fallback: false,
  };
}
