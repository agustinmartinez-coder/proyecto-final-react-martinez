import {addDoc, collection, getFirestore  } from 'firebase/firestore'


const createTask = async (task) => {

    const db = getFirestore()
    const taskCollection = collection (db, 'tasks')
    const response = await addDoc (taskCollection, task ) ;

    console.log (response)

}

export {createTask} ;