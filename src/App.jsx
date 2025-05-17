
// import './App.css'
// import { Button } from "@/components/ui/button"

// function App() {

//   return (
//     <>
//      <h1 className='text-2xl text-center'>Hello</h1>
//            <Button>Click me</Button>
//    </>
//   )
// }

// export default App



import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function App({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}