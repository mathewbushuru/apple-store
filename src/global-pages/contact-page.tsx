import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <p className="max-w-[15rem] text-center text-2xl font-bold">
        How would you like to get help?
      </p>
      <p className="font-light">Call us at 1-800-MY-APPLE</p>
      <p className="font-light">Sign with is online (ASL).</p>
      <Button onClick={() => navigate(-1)}>Go back.</Button>
    </div>
  );
}
