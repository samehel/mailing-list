const Name = () => {
    return (
        <div>
            <div>
            <input type="radio" id='personal' name='radbtn' className='rdbtns' checked/>
            <label>Personal</label>
            <input type="radio" id='business' name='radbtn' className='rdbtns'/>
            <label>Business</label>
        </div>
        <br/>
        <div>
            <div className='tb1'>
            <label for="fname" className="nameID">First Name *</label>
            <input id="fname" type="text" value="" name="fname" className="nameID" required/>
            </div>
            <div className='tb2'>
            <label for="lname" className="nameID">Last Name *</label>
            <input id="lname" type="text" value="" name="lname" className="nameID" required/>
            </div> 
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
}

export default Name;