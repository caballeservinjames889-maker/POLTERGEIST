import { useState, type SyntheticEvent } from 'react'
import {Input} from './components/ui/input';
import {Button} from './components/ui/button';
import {Card} from './components/ui/card'
import { Label } from './components/ui/label';
import './index.css'
import {supabase} from './lib/supaBaseClient'

function App() {
   
   const [name, setName] = useState("");
   const [loading, setLoading] = useState(false);
   const handleSubmit = async (e:SyntheticEvent) => {
      e.preventDefault();
      
      if(!name.trim()) return;
      setLoading(true);
      const {error}  = await supabase.from('person').insert([{name:name}]);

      if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data added successfully!');
      setName(''); // Clear input
    } 
    setLoading(false);
   }

  return (
    <>
        <div className="flex h-screen items-center justify-center ">
             <Card className="max-w-sm rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200 md:p-8">
            <Input type="text" placeholder="Enter your name" value={name} onChange = {(e) => setName(e.target.value)}/>
            
            <Button onClick={handleSubmit}> Submit </Button>
            <Label>
            {loading ? 'Saving...' : 'Save'}
            </Label>  
            </Card>
            
        </div>
        
    </>
  )
}

export default App
