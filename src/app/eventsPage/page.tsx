import { ComboboxDemo } from '@/components/dropDownEvents/monthFilter'
import { SearchBar } from '@/components/dropDownEvents/searchBar'
import { ComboboxDemoYear } from '@/components/dropDownEvents/yearFilter'

function EventsPage() {
  return (
    <div className='w-full'>
      <div className='container mx-auto flex flex-col '>
        <h1 className='text-3xl mt-4'>Participa de nuestros eventos:</h1>
        <div className='flex flex-row gap-2  justify-start mt-4'>
          <ComboboxDemo />
          <ComboboxDemoYear />
          <SearchBar />
        </div>
      </div>
    </div>
  )
}
export default EventsPage
