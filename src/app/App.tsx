import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="169052745462-pt4kkuhom7j0oaf0mois18s6bpq1f989.apps.googleusercontent.com">
      <RouterProvider router={router} />
      <Toaster position="top-right" theme="dark" />
    </GoogleOAuthProvider>
  );
}

export default App;