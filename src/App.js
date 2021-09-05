import Layout from "./components/Layout";
import Profile from "./components/Profile";
import { ResetCSS } from "./globals/resetCSS";

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;