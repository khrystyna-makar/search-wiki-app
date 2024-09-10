import { useState } from 'react'
import ReactAutocomplete from 'react-autocomplete'
import { useSearch, useDebounce } from './hooks'
import Input from './components/Input';

function App() {
  const [value, setValue] = useState('');
  const { articles } = useSearch(useDebounce(value));

  return (
    <>
      <ReactAutocomplete
        items={articles}
        // shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1} 
        getItemValue={item => item.label}
        renderInput={Input}
        inputProps={{ placeholder: 'Input a search term:' }}
        renderMenu={(children, value, style) => (
          <div style={{ ...style }} className='input-suggestions'>
            {children}
            <a href={`/search?query=${value}`} className='search-link'>
              See all results
            </a>
          </div>
        )}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.label}
          </div>
        }
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setValue(value)}
      />
    </>
  )
}

export default App
