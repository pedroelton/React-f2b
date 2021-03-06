/* eslint-disable react/jsx-pascal-case */
import{v4 as uuidv4} from "uuid"
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback 3',
            rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
// Delete feedback
    const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item)=>item.id !==id))
    }        
    }
    // add feedback
    const AddFeedback = (newFeedback) => {
    newFeedback.id=uuidv4()
    setFeedback([newFeedback,...feedback])
    }

//Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
        
          // FIX: this fixes being able to add a feedback after editing
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }
    
// Set item to be updated
const editFeedback = (item) => {
setFeedbackEdit({
    item,
    edit: true,
})
}

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            AddFeedback,
            editFeedback,
            updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>)
}

export default FeedbackContext;