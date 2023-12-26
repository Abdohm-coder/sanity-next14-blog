"use client";
import { enableOverlays, HistoryAdapterNavigate } from "@sanity/overlays";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function VisualEditing() {
  const router = useRouter();
  const routerRef = useRef(router);
  const [navigate, setNavigate] = useState<
    HistoryAdapterNavigate | undefined
  >();

  const pathname = usePathname();

  useEffect(() => {
    routerRef.current = router;
  }, [router]);
  useEffect(() => {
    const disable = enableOverlays({
      history: {
        subscribe: (navigate) => {
          setNavigate(() => navigate);
          return () => setNavigate(undefined);
        },
        update: (update) => {
          switch (update.type) {
            case "push":
              return routerRef.current.push(update.url);
            case "pop":
              return routerRef.current.back();
            case "replace":
              return routerRef.current.replace(update.url);
            default:
              throw new Error(`Unknown update type: ${update.type}`);
          }
        },
      },
    });
    return () => disable();
  }, []);
  useEffect(() => {
    if (navigate) {
      navigate({ type: "push", url: pathname as string });
    }
  }, [navigate, pathname]);

  return null;
}
