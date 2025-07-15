import { Layout } from "@/layout/layout";
import { Welcome } from "@/pages/auth/welcome";
import { Claim } from "@/pages/claim";
import { Dashboard } from "@/pages/dashboard";
import NotFoundPage from "@/pages/not-found";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/claim" element={<Claim />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
