import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
export default function AuthLayout(props) {
   return (
     <html lang="en">
       <body>
      <AppRouterCacheProvider>
           {props.children}
      </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
