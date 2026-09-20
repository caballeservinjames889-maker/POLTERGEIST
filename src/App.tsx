import { useState } from 'react'
import {Input} from './components/ui/input';
import {Button} from './components/ui/button';
import {Card} from './components/ui/card'
import './index.css'

function App() {
  

  return (
    <>
        <div className="flex h-screen items-center justify-center ">
             <Card className="max-w-sm rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200 md:p-8">
            <Input type="text" placeholder="Enter your name" />
            <Button> Submit </Button>
            </Card>
        </div>
       
    </>
  )
}

export default App
