import {create} from 'zustand'

type SelectedInfo = {
  selectedComponent: string | undefined
  setSelectedComponent: (header:string)=> void
}

const useSelectedCompStore = create<SelectedInfo>() ((set)=> ({
  selectedComponent: undefined,
  setSelectedComponent: (header)=>set({selectedComponent : header}),
}))

export default useSelectedCompStore