import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Cart() {
  return <div>cart</div>;
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
