import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
     {/* <script defer src="https://cdn.adsconex.com/js/adsconex-player.js"></script>    */}
     {/* <script defer src="https://cdn.adsconex.com/js/adsconex-banner-bw-feji-rl.js"></script> */}
     

        
        {/* --- HẾT Mã FEJI (HEAD) --- */}
      </Head>
<Script 
        src="https://cdn.adsconex.com/js/adsconex-player.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdn.adsconex.com/js/adsconex-banner-bw-feji-rl.js" 
        strategy="afterInteractive" 
      />
      {/* <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script> */}
      
      <Script 
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      {/* QUAN TRỌNG: GPT thường đi kèm đoạn mã khởi tạo (googletag.cmd.push...).
         Bạn nên thêm đoạn đó ngay bên dưới dưới dạng inline script như sau:
      */}
      <Script id="google-ad-manager-init" strategy="afterInteractive">
        {`
          window.googletag = window.googletag || {cmd: []};
        `}
      </Script>




{/* 🔥 TABOOLA SCRIPT — đặt ngoài HEAD */}
<Script id="taboola-script" strategy="afterInteractive">
  {`
    window._taboola = window._taboola || [];
    _taboola.push({article:'auto'});
    !function (e, f, u, i) {
      if (!document.getElementById(i)){
        e.async = 1;
        e.src = u;
        e.id = i;
        f.parentNode.insertBefore(e, f);
      }
    }(
      document.createElement('script'),
      document.getElementsByTagName('script')[0],
      '//cdn.taboola.com/libtrc/metaconex-dailynewsusfejiio/loader.js',
      'tb_loader_script'
    );

    if(window.performance && typeof window.performance.mark === 'function') {
      window.performance.mark('tbl_ic');
    }
  `}
</Script>



  {/* <!-- Metaconex tag (gtag.js) --> */}
<Script defer src="https://adsconex.com/js/config.js" data-config="all" strategy="beforeInteractive"></Script>
<meta name="verification" content="UnDNu4bFY3"></meta>


      {/* --- HẾT Mã BANNER FEJI (BODY Top) --- */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
