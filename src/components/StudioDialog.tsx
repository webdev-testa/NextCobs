"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

/** Native modal behavior shared by the note wall, note reader, and image viewer. */
export function StudioDialog({ label, onClose, children }: {
  label: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current!;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog ref={dialog} aria-label={label} className="studio-dialog" onCancel={(event) => {
      event.preventDefault();
      onClose();
    }} onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      {children}
    </dialog>,
    document.body,
  );
}
