import { MotionDiv, fadeIn, staggerContainer } from "../../components/ui/motion"
import { NoteForm } from "./note-form"
import { useQuery, getNotes } from "wasp/client/operations"
import { NoteList } from "./note-list"

export interface NotesProps {
  notes: Awaited<ReturnType<typeof getNotes>>
}

export default function Example() {
  const { data: notes, isLoading } = useQuery(getNotes, {}, {
    refetchInterval: 30000, // You likely don't want to do this, but it's here to demonstrate how to refetch data (for when the cron job adds new notes)
    refetchIntervalInBackground: true,
  })
  
  return (
    <MotionDiv
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <MotionDiv
        variants={fadeIn}
        className="space-y-4 mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Notes Example
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A simple demonstration of Wasp's Queries and Actions for data management.
        </p>
      </MotionDiv>

      <div className="grid gap-12 lg:grid-cols-5">
        <MotionDiv variants={fadeIn} className="space-y-6 col-span-3">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Create Note</h2>
            <p className="text-sm text-muted-foreground">
              Using Wasp's <a href="https://wasp-lang.dev/docs/data-model/operations/actions" 
                target="_blank" 
                className="font-medium text-primary hover:underline"
              >
                Actions
              </a> to add new notes.
            </p>
          </div>
          <NoteForm />
        </MotionDiv>
        <MotionDiv variants={fadeIn} className="space-y-6 col-span-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Your Notes</h2>
            <p className="text-sm text-muted-foreground">
              Using Wasp's <a href="https://wasp-lang.dev/docs/data-model/operations/queries" 
                target="_blank" 
                className="font-medium text-primary hover:underline"
              >
                Queries
              </a> to fetch and display notes.
            </p>
          </div>
          <NoteList notes={notes} isLoading={isLoading} />
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}
