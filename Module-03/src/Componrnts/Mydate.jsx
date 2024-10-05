function MyDate(){
        const Time = new Date();
        return(
              <>
               <h1>Local date & time!</h1>
               <p>{Time.toDateString()}</p>
              </>

        )
}

export default MyDate;