import Localbase from "localbase";

const Testlocalbase = () => {

    let myDatabase = new Localbase('myDatabase')

    const insertIntoDb = () => {
        myDatabase.collection('users').add({
            id: 9876543,
            name: 'Kira',
            age: 23,
        });
    }

    const getFromDb = () => {
        myDatabase.collection('users').get().then(users => { console.log(users)} )
    }

    const removeFromDb = () => {
        myDatabase.collection('users').delete()
    
    }
    return(
        <>
        <button onClick={insertIntoDb}>
            tilføj en bruger til databasen
        </button>
        <button onClick={getFromDb}>
            hent alle brugere fra databasen
        </button>
        <button onClick={removeFromDb}>
            slet alle brugere fra databasen
        </button>
      
        </>
    )
}
export default Testlocalbase;