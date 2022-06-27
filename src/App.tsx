import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {

  return (
    
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Router/>  
    </BrowserRouter>
    </ApolloProvider>
  )  
}

export default App

//Always you use the o hook UseQuery, you need put <ApolloProvider/> in main.txt around of the App