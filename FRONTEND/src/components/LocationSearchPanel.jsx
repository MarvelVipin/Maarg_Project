import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)

    return (
    <div>
        {
            props.suggestions.map(function (elem, idx){
                return <div key={idx} onClick={()=>{
                    if (props.activeField === 'pickup') {
                        props.setPickup(elem.description)
                    } else if (props.activeField === 'destination') {
                        props.setDestination(elem.description)
                    }
                    props.setPanelOpen(false)
                    props.setSuggestions([])
                }} className='flex gap-4 border-2 p-3 border-gray-10 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='h-8 w-12 flex items-center justify-center'><i className="ri-map-pin-2-fill "></i></h2>
            <h4 className='font-medium'>{elem.description}</h4>
        </div>
            })
        }

    </div>
  )
}

export default LocationSearchPanel
