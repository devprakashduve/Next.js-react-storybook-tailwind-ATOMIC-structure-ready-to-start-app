import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/PhysicsJS/0.7.0/physicsjs.min.js"
          integrity="sha512-zpiEmSiFGNgtuNsUabRhztr+StR+R8sOEJI3PnLpiIjPE7ZG3G4mUBb3iF/GLANM6p2PEHnjZ+SUUlGYbTLsBg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
