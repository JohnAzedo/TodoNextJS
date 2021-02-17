import "bootstrap/dist/css/bootstrap-grid.min.css"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="d-flex">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
