import { Button } from '@/components/ui/button'
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from '@/components/ui/credenza'
import React, { useEffect } from 'react'

export default function PopupModal() {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    const modalClosed = localStorage.getItem('modalClosed')
    if (!modalClosed) {
      setOpen(true)
    }
  }, [])

  const handleOpenChange = (
    isOpen: boolean | ((prevState: boolean) => boolean)
  ) => {
    // Only close from specific actions like the close button, not outside clicks
    if (!isOpen) {
      localStorage.setItem('modalClosed', 'true')
    }
    setOpen(isOpen)
  }

  return (
    <>
      <Credenza open={open} onOpenChange={handleOpenChange}>
        <CredenzaContent className="overflow-hidden -p-6">
          <CredenzaHeader>
            <CredenzaTitle>Credenza</CredenzaTitle>
            <CredenzaDescription>
              A responsive modal component for shadcn/ui.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody>
            This modal was triggered automatically on page load
          </CredenzaBody>
          <CredenzaFooter>
            <CredenzaClose asChild>
              <Button>Close</Button>
            </CredenzaClose>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  )
}
