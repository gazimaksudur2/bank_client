import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import 'react-tabs/style/react-tabs.css';
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import OverlayLoading from './layouts/OverlayLoading/OverlayLoading.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OverlayLoading>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <ToastContainer />
      </AuthProvider>
    </OverlayLoading>
  </StrictMode>,
)
