
/*
  Tab Value Component
  @param {string} value
  @param {function} onChange
  @param {array} items
*/


export const Tabs = ({value, onChange, items}) => {
  return (
    <div className='tabs'>
      {
        items?.map((item, index) => { 
          return <Tab key={index} 
            label={item.label} 
            active={value === item.value}
            onClick={() => {}}
            disabled={item.disabled}
            />
        } )
      }
    </div>
  )
}

export const Tab = ({active, label, onClick, disabled}) => {
  return(
    <div className={`tab ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`} onClick={onClick}>
      {label}
    </div>
  )
}