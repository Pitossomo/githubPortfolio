import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import { ResetCSS } from "./globals/resetCSS";

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;