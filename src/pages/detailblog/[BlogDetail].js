import BlogDetails from "@/BlogDetailComp/BlogDetails";
import RelatedPost from "@/BlogDetailComp/RelatedPost";
import Head from "@/HomePageComp/Header";
import Contact from "@/BlogDetailComp/Contact";
import Footer from "@/HomePageComp/Footer";

export default function index({Data,DataRelate}) {
  return (
    <>
      <div className="flex flex-col gap-5 bg-white">
        <BlogDetails Data={Data}  />

        <Contact />
        <RelatedPost DataRelate={DataRelate} />
        <Footer />
        <Head />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.BlogDetail;

  const request = await fetch(
    `https://shetkariserver-com.vercel.app/FarmBlog/${id}`
  );
  const Data = await request.json();

  const related = await fetch(`https://shetkariserver-com.vercel.app/FarmBlog`);
  const DataRelate = await related.json();

  return {
    props: {
      Data,
      DataRelate,
    },
  };
}


// export const getStaticProps = async (context) => {
//   const id = context.query.BlogDetail;
//   let response = await fetch(`https://shetkariserver-com.vercel.app/FarmBlog/${id}`);
//   let data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };