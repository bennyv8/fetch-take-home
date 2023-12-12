import router from "./Router";
import { FavoritesProvider } from "./contexts/index";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </>
  );
}

export default App;
