'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const InfoDialog = ({ open, onClose, title, description }: InfoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription
            className="mt-2 text-muted-foreground"
            asChild
          >
            <div
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
