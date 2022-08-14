import type { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box } from "@mantine/core";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
};

const Container = (props: Props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "Abner Development",
    description: "Project Starter built with Next.js, Mantine and Tailwindcss",
    image:
      "https://assets.vercel.com/image/upload/q_auto/front/zeit/twitter-card.png",
    type: "website",
    currentPage: router.asPath,
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://next-mantineui.vercel.app${meta.currentPage}`}
        />
        <link
          rel="canonical"
          href={`https://next-mantineui.vercel.app${meta.currentPage}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Next" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Box
        component="main"
        my="lg"
        px="md"
        sx={(theme) => ({
          maxWidth: theme.breakpoints.xl,
          marginLeft: "auto",
          marginRight: "auto",
        })}
      >
        {children}
      </Box>
    </>
  );
};

export default Container;
