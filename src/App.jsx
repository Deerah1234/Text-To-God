import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Home, MessageWall, SendAMessage } from "./pages";
import { Layout, WelcomeScreen } from "./components";

function App() {
    const [showMainApp, setShowMainApp] = useState(false);

    return (
        <Router>
            {!showMainApp ? (
                <WelcomeScreen onFinish={() => setShowMainApp(true)} />
            ) : (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="message-wall" element={<MessageWall />} />
                        <Route path="about" element={<About />} />
                        <Route
                            path="send-a-message"
                            element={<SendAMessage />}
                        />
                    </Route>
                </Routes>
            )}
        </Router>
    );
}

export default App;
