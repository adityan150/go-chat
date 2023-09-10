import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/chats" element={<Chatpage />} />
            </Routes>
          </ChatProvider>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
