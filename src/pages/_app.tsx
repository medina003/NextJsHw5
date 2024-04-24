import CustomLayout from "@/components/CustomLayout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}


export default App