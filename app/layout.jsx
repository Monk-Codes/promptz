import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
 title: "Promptz",
 description: "Promptz is a simple prompt generator.Discover and share AI prompts",
};
const RootLayout = ({ children }) => {
 return (
  <html>
   <body>
    <Provider>
     <div className="main">
      <div className="gradient" />
     </div>
     <main className="app">
      <Nav />
      {children}
     </main>
    </Provider>
   </body>
  </html>
 );
};

export default RootLayout;
