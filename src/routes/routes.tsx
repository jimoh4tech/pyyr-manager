import { Layout } from "@/layout/layout";
import { Welcome } from "@/pages/auth/welcome";
import { Dashboard } from "@/pages/dashboard";
import NotFoundPage from "@/pages/not-found";
import { Route, Routes } from "react-router-dom";

// const CurrentUserProviderWrapper = () => (
//   <CurrentUserProvider>
//     <Layout />
//   </CurrentUserProvider>
// );

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
