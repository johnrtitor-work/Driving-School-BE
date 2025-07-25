import { createFileRoute } from "@tanstack/react-router";
import PupilPage from "@/pages/Pupils/pupil.page";

export const Route = createFileRoute("/pupils/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PupilPage />
    </>
  );
}
