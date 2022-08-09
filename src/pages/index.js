export default function Index({ Fruits }) {
  return <div></div>;
}

export async function getStaticProps(context) {
  return {
    redirect: {
      permanent: true, 
      destination: "/Home",
    },
  };
}
