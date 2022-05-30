import type { NextPage, GetServerSideProps } from "next";
import Container from "components/Container";
import { Anchor } from "@mantine/core";
import Link from "next/link";

type Props = {
  id: string;
};

const TestPage: NextPage<Props> = ({ id }) => {
  return (
    <Container>
      <h1>ID: {id}</h1>
      <Link href="/">
        <Anchor color="orange">Back to home</Anchor>
      </Link>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  return {
    props: {
      id,
    },
  };
};

export default TestPage;
