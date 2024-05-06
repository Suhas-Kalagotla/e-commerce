import { getSession, useSession } from "next-auth/react";

export default function Dashboard(){
    return(
        <div> Dashboard</div>
    )
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
  if (session.user?.role == "USER") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

