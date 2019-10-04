import React, { useState } from 'react'

const useSearch = () => {
    const [value, setValue] = useState('')
    
    const handleChanges = e => {
        setValue(e.target.value)
    }

    return [value, handleChanges, setValue]
}

export default useSearch