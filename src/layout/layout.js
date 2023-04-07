import Head from "next/head"
import img from '../../public/vercel.svg'
import Script from "next/script"
export default function Layout({children,title:string="Shetkari Web App"}){
    return(

        <div>


{/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6500167973378849"
     crossorigin="anonymous"></Script> */}

{/* 
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-11FXDKJ3K5"></Script>
<Script>
    {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-11FXDKJ3K5');
}
</Script> */}

<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-11FXDKJ3K5`} />

<Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-11FXDKJ3K5', {
        page_path: window.location.pathname,
        });
    `}
</Script>


<Head>
<link rel="shortcut icon" href={img} />
<mete name="robots" content="index,follow"/>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta name="author" content="Author Name"/>
<title>shetkariweb</title>


</Head>
{children}

        </div>
    )
}