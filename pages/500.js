// 500 (Custom) Page // Custom error page // File statically generated at build time
// Same exacts was for '404 (Custom) Page', with "return <h1>404 - Page Not Found :(</h1>" but I left Next's default for now
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
};

// Note: You can use getStaticProps inside this page if you need to fetch data at build time